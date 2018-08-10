const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker')
const mockData = require('../mockdata.js');

/*
  id SERIAL PRIMARY KEY,
  features varchar(500),
  things_to_do varchar(500),
  lat_location decimal,
  lon_location decimal,
  host_guidebook varchar(255),

*/

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
};

const randomBool = () => {
  var num = Math.floor(Math.random() * Math.floor(2))
  if(num === 0){
    return true;
  }
  return false;
}
const createCSV = (fileName) => {
  fileName = fileName || 'data.csv';
  writer.pipe(fs.createWriteStream('./csvFiles/listings/' + fileName));

  for(let i = 0 ; i < 5000000; i++){
    var data = {
                features: faker.hacker.ingverb(),
                things_to_do: faker.hacker.verb(),
                lat_location: faker.address.latitude() ,
                lon_location: faker.address.longitude()
                }
    writer.write(data)
  }
  
  writer.end();
  console.log('Done');
};

createCSV('second_listingsTableData');