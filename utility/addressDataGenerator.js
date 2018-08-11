var faker = require('faker');
const fs = require('fs');
var address = faker.address;
console.log(address);
var id = 1;

var name = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for(var i = 0; i < name.length; i++){
	for(var j = 0; j < name.length; j++){
		for(var k = 0; k < name.length; k++){
			for(var l = 0; l < name.length; l++){
				for(var m = 0; m < name.length; m++){
					if(id === 100000){
						console.log(id);
					}
					if(id > 10000000){
						return;
					}
					var uniqueName = name[i]+name[j]+name[k]+name[l]+name[m];
					fs.appendFileSync('addressObj.csv', 
						`${id++},${address.streetAddress()},${address.streetName()},${address.city()},${address.zipCode()},${address.state()},${uniqueName}\r\n`, 'utf-8');
				}
			}
		}
	}
}

	
