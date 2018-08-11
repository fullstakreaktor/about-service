const fs = require('fs');
var city = ["San Francisco", "Shanghai", "Tokyo", "London", "New York", "Philadelphia", "Paris", "Beijing", "Seoul", "Istanbul", "Dubai", 'Singapore', 'Kuala Lumpur']; //12
var place = ["Hack Reactor", "Nojo Ramen", "Corona Heights Park", "Gold Gate Bridge", "Dutch Wind Mill", "Ushigome-Kagurazaka", "Wolfheze"]; //7
var street = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,25]; //15
var apt = [942,357,216,764,1414,2567,2345,1015,742,256,1245,4234,7437,3469,1001,999]; // 16
var states = [ "AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
//50


// sum = 12 * 7 * 30 * 16 * 50
var id = 1;
for( var i = 0; i < city.length; i++){
	for(var j = 0; j < place.length; j++){
		for(var k = 0; k < street.length; k++){
			for(var l = 0; l < apt.length; l++){
				for(var m = 0; m < states.length; m++){
					var s = [apt[l],street[k],place[j],city[i],states[m]].join(" ");
					// s = s + `\r\n`;
					
					fs.appendFileSync('./addressObj.csv', `${id++},${s}\r\n`, 'utf-8');
				}
			}
		}
	}
}