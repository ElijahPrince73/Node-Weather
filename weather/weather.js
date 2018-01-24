const request = require('request');

const getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/51afe8f151e208b4901682cbe1e851a6/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			})
		} else {
			callback('Unable to fetch weather');
		}
	})
}

module.exports.getWeather = getWeather
