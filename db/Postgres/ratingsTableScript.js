const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker')
const mockData = require('../mockdata.js');



const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
};


const createCSV = (fileName) => {
  fileName = fileName || 'data.csv';
  writer.pipe(fs.createWriteStream('./csvFiles/ratings/' + fileName));

  for(let i = 0 ; i < 10000000; i++){
    var data = {
                rating: Math.ceil(Math.random()*1000),
                host_id: Math.ceil(Math.random()*10000000),
                listings_id: Math.ceil(Math.random()*10000000)
                }
    writer.write(data)
  }
  
  writer.end();
  console.log('Done');
};

createCSV('ratingsTable.csv');