import axios from 'axios';
import mongoose, { get } from 'mongoose';
import { fromEvent, asyncScheduler, Observable, interval, from, of } from 'rxjs';
import User from './models/user';
import Tale from './models/tale';
import crawler from './Service/crawler'


main();


async function connectDb() {
    console.log("connecting to DB...");
    await mongoose.connect('mongodb+srv://isk030:' + process.env.MONGO_ATLAS_PW + '@cluster0-xfnrc.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, function(error){
        if(error) {
            console.log(error);
        }else {
            console.log("DB connected");
        }
    })

}

async function main() {
    await connectDb();
    console.log("hello")
    crawler.getAllUrls();
}




