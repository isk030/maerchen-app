import axios from 'axios';
import cheerio from 'cheerio';
import Tale from '../models/tale';
import mongoose from 'mongoose';
import { fromEvent, asyncScheduler, Observable, interval, from, of } from 'rxjs';
import { throttleTime, withLatestFrom, filter, switchMap, map, mergeAll, concatMap, toArray, flatMap} from 'rxjs/operators';


let allLinks = new Array();

function saveTale(tale) {

    tale.save(function (err, tale) {
        if (err) {
            return console.error(err);
        }else {
            console.log("saved successfully");
        }
    })
}


function fetchTale(url) {
    return from(axios.get(url).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.status);

        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.error(error.request +"lol2");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
        }
      }))     
}   

function start() {
    const urls = ['https://maerchen.com/grimm/',
    'https://maerchen.com/grimm2/',
    'https://maerchen.com/andersen/',
    'https://maerchen.com/bechstein/',
    'https://maerchen.com/wolf/']

    return from(urls)
        .pipe(  concatMap(url => {return from(axios.get(url))}),
                map(result => result.data),
                map(x => {
                    let $ = cheerio.load(x);
                    let contentwrapper = $('.contentwrapper');

                    let res = contentwrapper.find('a').map(function(i, el) {
                    return $(this).attr('href');
                    }).get()

                    return res
                }),
                mergeAll(),
                toArray())
            }


function urlsReady() {
    let lol = start();
    lol.subscribe(doc => {
            
       // allLinks = doc.flatMap(x=> {return x})
        console.log(doc)
        console.log(doc.length)
    })
    // const realLinks = await allLinks.flatMap(x=> {return x}); 
    // console.log(realLinks); 
    // console.log(realLinks.length)
    
}


function getTaleUrls(){
    const urls = ['https://maerchen.com/wolf/der-fischerssohn-der-rappe-und-der-schimmel.php',
    'https://maerchen.com/wolf/das-schneiderlein-und-die-drei-hunde.php',
    'https://maerchen.com/wolf/die-prinzessin-von-tiefental.php',
    'https://maerchen.com/wolf/die-prinzessin-von-tiefental.php',
    'https://maerchen.com/wolf/die-prinzessin-von-tiefental.php']


    const url$ = from(urls)

    url$
        .pipe(  concatMap(url => fetchTale(url)),
                map(result => result.data))
        .subscribe(doc => {
                                const $ = cheerio.load(doc);
                                const contentwrapper = $('.contentwrapper');
        
                                    const tale = new Tale({
                                    _id: new mongoose.Types.ObjectId(),
                                    title: contentwrapper.find('h1').text(),
                                    author: contentwrapper.find('.autor').text(),
                                    url: "hans",
                                    content: ($('.contentwrapper').children().remove().end().text().replace(/\n/g, ' ')).trim() 
                                    
                                })
                                

                            console.log(tale)
                            },
                            err => {'OOPS', console.error(err.message)},
                            () => {console.log("We're done here!")})
}




export default {getTaleUrls, urlsReady}