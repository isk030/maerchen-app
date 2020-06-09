import axios from 'axios';
import cheerio from 'cheerio';
import Tale from '../models/tale';
import mongoose from 'mongoose';
import { from } from 'rxjs';
import { map, mergeAll, concatMap } from 'rxjs/operators';


function scrapeUrls(doc, pre) {
    const $ = cheerio.load(doc);
    const contentwrapper = $('.contentwrapper');

        const res = contentwrapper.find('a').map(function (i, el) {
            return pre + $(this).attr('href');
        }).get()
    
    return res
    
}

function start() {
    const linksToTale = ['https://maerchen.com/grimm/',
        'https://maerchen.com/grimm2/',
        'https://maerchen.com/andersen/',
        'https://maerchen.com/bechstein/',
        'https://maerchen.com/wolf/']

    return from(linksToTale)                                                    // get link to tale collections
        .pipe(concatMap(linkToTale => { return from(axios.get(linkToTale)) }),  // axios request of html
            map(result => [result.data, result.config.url]),                    // clean axios object for real html fetch
            map(doc => scrapeUrls(doc[0], doc[1])),                             // scrape html for links to each tale
            mergeAll(),                                                         // put each link into flat manner
            concatMap(url => {return from(axios.get(url))}),                    // axios request of html for tale html
            map(result => [result.data,result.config.url ]),                    // extract real html of axios object
            map(doc => scrapeTales(doc[0], doc[1]))                             // scrape each tale and convert into object
            )
}

function scrapeTales(doc, url) {

        const $ = cheerio.load(doc);
        const contentwrapper = $('.contentwrapper');

        const tale = new Tale({
            _id: new mongoose.Types.ObjectId(),
            title: contentwrapper.find('h1').text(),
            author: contentwrapper.find('.autor').text(),
            url: url,
            content: ($('.contentwrapper').children().remove().end().text().replace(/\n/g, ' ')).trim()

        })
         return(tale)
}



function urlsReady() {
    let lol = start(); // load tale objects as observables
    lol.subscribe(tale => {             // subscribe to tale object and save in DB
        tale.save(function(err, tale) {
            if (err) return console.error(err);
            console.log(tale.title + " Document inserted successfully!");
          });
    })
}

export default {urlsReady }