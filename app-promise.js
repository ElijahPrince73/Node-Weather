const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		string: true
	}
}).help().alias('help', 'h').argv

const encodedAdress = encodeURIComponent(argv.address);

const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`

axios.get(geocodeURL).then((response, reject) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find address')
	}
	const lat = response.data.results[0].geometry.location.lat
	const lng = response.data.results[0].geometry.location.lng
	const weatherURL = `https://api.darksky.net/forecast/51afe8f151e208b4901682cbe1e851a6/${lat},${lng}`
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherURL)

}).then((response) => {
	const temperature = response.data.currently.temperature
	const apparentTemperature = response.data.currently.apparentTemperature

	console.log(`It's currently ${temperature}, but feels like ${apparentTemperature}`);
}).catch((err) => {
	if (err.code === 'ENOTFOUND') {
		console.log('Unable to connect to API');
	} else {
		console.log(err.message);
	}
})