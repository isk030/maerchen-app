import api from './app';

const port =  process.env.PORT || 3000;

// server.listen(port);

  
api.listen(port, function () {
	console.log('Example app listening on port 3000!');
});
  
