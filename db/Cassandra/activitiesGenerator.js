var faker = require('faker');
var arr = []
for(var i = 0; i < 1000; i++){
	arr.push(faker.hacker.verb())
}

module.exports = arr;
