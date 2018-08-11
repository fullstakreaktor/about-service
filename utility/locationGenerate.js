
var longitudes = [];
var latitudes = [];

const googleApiMapToken = require('./googleMapApi.js');
const request = require('request');
// console.log($);
const locations = [];
for(let i = 0; i < 2000; i++){
	const longitude = Math.random() * 181 - 90;
	const latitude = Math.random() * 361 - 180;
	const combine = `${longitude},${latitude}`;
	console.log(combine);
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${longitude},${latitude}&key=${googleApiMapToken}`,
		method: 'get'
	}, (err, res, body) => {
		locations.push(res);
	});

}

//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY