require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var dbPostG = require('../db/Postgres/connection.js');
const redis = require('redis');
var client = redis.createClient('6379', 'redis');
// var compression = require('compression')
const app = express();


// to parse our data and use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/pawstel/:id', express.static(path.join(__dirname, '../public')));


app.get('/api/about/hosts/:id', (req, res) => {
  dbPostG.selectHostInfo(+req.params.id).then(function(data){
    res.send(JSON.stringify(data))
  }).catch(function(err){
    console.log('host not working')
  })
})


app.get('/api/about/reviews/:id', (req, res) => {
  dbPostG.reviewsForHost(+req.params.id).then(function(data){
    res.send(JSON.stringify(data[0].review_num))
  }).catch(function(err){
    console.log('reviews not working');
    throw err;
  })
})



app.get('/api/about/neighborhood/:listingId', (req, res) => {
  dbPostG.neighborhoodInfo(+req.params.listingId).then(function (data) {
    res.send(JSON.stringify(data))
  }).catch(function(err){
    console.log('neighborhood info not working');
    throw err;
  })
});

const cacheHostByLoc = (req, res) => {
  //Check the cache data from the server redis 
  client.get('hostByLocKey', (err, result) => {
    if (result) {
      res.send(result);
    } else {
      dbPostG.getListingByLoc(req.params.state, req.params.city).then(function(data){
        client.setex('hostByLocKey', 3600, JSON.stringify(data));
        res.send(data);
      }).catch(function(error){
        console.log('Error:', error)
      })
    }
  });
}

// postgres query 
const cacheListById = (req, res) => {
  client.get('listById', (err, result) => {
    if(result){
      res.send(result);
    } else {
      dbPostG.getHostInfo(+req.params.id).then( function(data){
        client.setex('listById', 36000, JSON.stringify(data));
        res.send(data);
      }).catch(function(error){
        console.log('Error:', error)
      });
    }
  })

}



app.get('/api/getListingByLoc/:state/:city', cacheHostByLoc);
app.get('/api/getHostInfo/:id', cacheListById);



app.listen(3001, () => {
  console.log('Server started on 3001');
});


