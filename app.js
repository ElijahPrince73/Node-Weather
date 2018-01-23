// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs.options({
// 	a: {
// 		demand: true,
// 		alias: 'address',
// 		describe: 'Address to fetch weather for',
// 		string: true
// 	}
// }).help().alias('help', 'h').argv
//
// geocode.geocodeAddress(argv.address, (errorMessage, result) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(result, undefined, 2));
// 	}
// })

// 51afe8f151e208b4901682cbe1e851a6

const request = require('request');

request({
	url: `https://api.darksky.net/forecast/51afe8f151e208b4901682cbe1e851a6/36-115.1182129`,
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		console.log(body.currently.temperature);
	} else {
		console.log('Unable to fetch weather');
	}
})
