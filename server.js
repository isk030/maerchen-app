/**
 * Hosting Server and listening on available Port
 * @module Startup/server
 */
import api from './app';

const port =  process.env.PORT || 3000;

api.listen(port, function () {
	console.log('Example app listening on port 3000!');
});
  
