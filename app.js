/**
 * Main entry point of the app
 * @module Startup/app
 */

/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import Tale from './models/tale';
import crawler from './Service/crawler';
import talesRoutes from './api/routes/tales';
import userRoutes from './api/routes/user';
import bodyParser from 'body-parser';

const api = express();
api.use(morgan('dev'));

/**
 * Setting up express
 */
api.use(bodyParser.urlencoded({extended: false}));
api.use(bodyParser.json());

/**
 * Setting up CORS header
 */
api.use((req, res, next) => {
	res.header(
		'Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);

	if(req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

/**
 * Forwarding request to depending controllers
 */
api.use('/user', userRoutes);
api.use('/tale', talesRoutes);

/**
 * Default response for empty route for checking api status
 */
api.get('/', function (req, res) {
	res.status(200).send('Maerchen API ist up!');
});

/**
 * 404 response
 */
api.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

/**
 * 500 response
 */
api.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

main();

/**
 * Connect to MongoDB in Atlas infrastructure
 */
async function connectDb() {
	console.log('connecting to DB...');
	await mongoose.connect('mongodb+srv://isk030:' + process.env.MONGO_ATLAS_PW + '@cluster0-xfnrc.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		}, function (error) {
			if (error) {
				console.log(error);
			} else {
				console.log('DB connected');
			}
		});
	mongoose.Promise = global.Promise;
        
}

/**
 * Async main function for starting ob connection and scraping processes
 */
async function main() {
    
	await connectDb();

	if (await Tale.countDocuments({}) == 373) { // check amount of Tales before crawling
		console.log('Crawling not needed');
	} else {
		crawler.urlsReady();
	}
      
}

export default api;

