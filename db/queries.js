const pool = require('./connect_postgres.js');
const db = require('./connection.js');
const selectHostInfo = (id, callback) => {
  const theQuery = `select * from hosts where id = ${id}`;
  db.query(theQuery, (err, result) => {
  //pool.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const reviewsForHost = (id, callback) => {
  const theQuery = `select rating from reviews where user_id = ${id}`;
  db.query(theQuery, (err, result) => {
  //pool.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const neighborhoodInfo = (id, callback) => {
  const theQuery = `select * from listings where id = ${id}`;
  db.query(theQuery, (err, result) => {
  //pool.query(theQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, result);
    }
  });
};

const updateAvgReview = (id, newReview) => {
  // Do later.
};

const postHost = (first, last, city, st, cnt, join, dsc, mail, url, callback) => {
  const queryStr = 'INSERT INTO hosts (first_name, last_name, city, state, country, joined_in_date, description, email, photo_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const params = [first, last, city, st, cnt, join, dsc, mail, url];
  pool.query(queryStr, params, callback);
};

module.exports = {
  selectHostInfo, reviewsForHost, neighborhoodInfo, postHost, updateAvgReview,
};
