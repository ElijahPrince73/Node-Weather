const request = require('request');
const geocodeAddress = (address, test) => {
	return new Promise((resolve, reject) => {
		const encodedAdress = encodeURIComponent(address);
		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
			json: true
		}, (error, response, body) => {
			if (error) {
				reject('Unable to connect to google servers')
			} else if (body.status === 'ZERO_RESULTS') {
				reject('Unable to find address');
			} else if (body.status === 'OK') {
				resolve({
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				})
			}
		})
	})
}

geocodeAddress('89123 ').then((location) => {
	console.log('Address', JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
}).catch((err) => {
	console.log(err);
})