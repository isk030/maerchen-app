import axios from 'axios';
import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import { fromEvent, asyncScheduler, Observable, interval, from, of } from 'rxjs';
import User from './models/user';
import Tale from './models/tale';
import crawler from './Service/crawler'
import talesRoutes from './api/routes/tales'
import userRoutes from './api/routes/user'
import bodyParser from 'body-parser'

const api = express();
api.use(morgan('dev'));

api.use(bodyParser.urlencoded({extended: false}));
api.use(bodyParser.json());




api.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin", "*");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


api.use('/user', userRoutes);
api.use('/tale', talesRoutes);

api.get('/', function (req, res) {
    res.status(200).send('Hello World!');
  });

api.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

api.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


main();


async function connectDb() {
    console.log("connecting to DB...");
    await mongoose.connect('mongodb+srv://isk030:' + process.env.MONGO_ATLAS_PW + '@cluster0-xfnrc.mongodb.net/test?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }, function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log("DB connected");
            }
        })
        mongoose.Promise = global.Promise;
        
}


async function main() {
    var db = mongoose.connection;
    
    await connectDb();
    console.log("hello")

    if (await Tale.countDocuments({}) == 373) { // check amount of Tales before crawling
        console.log("Crawling not needed")
    } else {
        crawler.urlsReady();
    }
      
}


export default api

