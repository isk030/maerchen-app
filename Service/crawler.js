import axios from 'axios';
import cheerio from 'cheerio';
import Tale from '../models/tale';
import mongoose from 'mongoose';
import { fromEvent, asyncScheduler, Observable, interval, from, of } from 'rxjs';
import { throttleTime, withLatestFrom, filter, switchMap, map, mergeMap } from 'rxjs/operators';




function getOneTale(url){
    const Http$ = from(axios.get("http://maerchen.com/andersen/der-tannenbaum.php"));

    Http$
        .pipe(map(result => result.data))
        .subscribe(doc => {
            const $ = cheerio.load(doc);
            const contentwrapper = $('.contentwrapper');

            const tale = new Tale({
                _id: new mongoose.Types.ObjectId(),
                title: contentwrapper.find('h1').text(),
                author: contentwrapper.find('.autor').text(),
                url: "http://maerchen.com/andersen/der-tannenbaum.php",
                content: ($('.contentwrapper').children().remove().end().text().replace(/\n/g, ' ')).trim()
                
            });
            console.log(tale);
            // tale.save(function (err, tale) {
            //     if (err) {
            //         return console.error(err);
            //     }else {
                    console.log("saved successfully");
                // }
              });

        // })
}

function getAllUrls(){
    const urls = ['https://maerchen.com/grimm/',
    'https://maerchen.com/grimm2/',
    'https://maerchen.com/andersen/',
    'https://maerchen.com/bechstein/',
    'https://maerchen.com/wolf/']

    for (let taleUrl of urls) {
        const taleUrls = [];
        const Http$ = from(axios.get(taleUrl));


        Http$
        .pipe(map(result => result.data))
        .subscribe(doc => {
            const $ = cheerio.load(doc);
            const contentwrapper = $('.contentwrapper');
             
            console.log(contentwrapper.find('a').map(function(i, el){
                return $(this).attr('href');
            }).get())
    }


        )}}




export default {getOneTale, getAllUrls}