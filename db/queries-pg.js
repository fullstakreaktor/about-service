const client = require('./connection-pg.js');

const selectHostInfo = (id, callback) => {
  const theQuery = `select * from hosts where id = ${id}`;
  client.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      console.log('hosts', result.rows);
      callback(null, result.rows);
    }
  });
};

const reviewsForHost = (id, callback) => {
  const theQuery = `select * from reviews where user_id = ${id}`;
  client.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      console.log('reviews length',result.rows.length);
      callback(null, result.rows.length);
    }
  });
};

const neighborhoodInfo = (id, callback) => {
  const theQuery = `select * from listings where id = ${id}`;
  client.query(theQuery, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      console.log('neighborhoodInfo', result.rows);
      callback(null, result.rows);
    }
  });
};

module.exports = {
  selectHostInfo, reviewsForHost, neighborhoodInfo,
};
