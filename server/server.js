require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/queries.js');
var dbPostG = require('../db/Postgres/connection.js');
const redis = require('redis');
var client = redis.createClient()
var compression = require('compression')
const app = express();

// to parse our data and use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/pawstel/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/about/hosts/:id', (req, res) => {
  // console.log(req.params);
  db.selectHostInfo(+req.params.id, (err, result) => {
   //console.log('heeeeeelo', arguments);
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

app.get('/api/about/reviews/:listingId', (req, res) => {
  //console.log(req.params);
  db.reviewsForHost(+req.params.listingId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

app.get('/api/about/neighborhood/:listingId', (req, res) => {
  db.neighborhoodInfo(+req.params.listingId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
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
        client.setex('listById', 3600, JSON.stringify(data));
        res.send(data);
        //dbPostG.pgp.end();
      }).catch(function(error){
        console.log('Error:', error)
      });
    }
  })

}
// app.get('/api/getHostInfo/:id/', (req, res) => {
//   dbPostG.getHostInfo(+req.params.id).then( function(data){
//     //console.log(data);
//     res.send(data);
//     //dbPostG.pgp.end();
//   }).catch(function(error){
//     console.log('Error:', error)
//   });

// })

// app.get('/api/getListingByLoc/:state/:city', (req, res) => {
//   dbPostG.getListingByLoc(req.params.state, req.params.city).then(function(data){
//     res.send(data);
//   }).catch(function(error){
//     console.log('Error:', error)
//   })
// })

app.get('/api/getListingByLoc/:state/:city', cacheHostByLoc);
app.get('/api/about/neighborhood/:listingId', cacheListById);

// app.use(compression())
app.listen(3001, () => {
  console.log('Server started on 3001');
});


