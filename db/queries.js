const connection = require('./connection.js');

const selectHostInfo = (id, callback) => {
  const theQuery = `select * from hosts where id = ${id}`;
  connection.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const reviewsForHost = (id, callback) => {
  const theQuery = `select * from reviews where user_id = ${id}`;
  connection.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.length);
    }
  });
};

const neighborhoodInfo = (id, callback) => {
  const theQuery = `select * from listings where id = ${id}`;
  connection.query(theQuery, (err, result)=> {
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
  connection.query(queryStr, params, callback);
};

module.exports = {
  selectHostInfo, reviewsForHost, neighborhoodInfo, postHost, updateAvgReview,
};
