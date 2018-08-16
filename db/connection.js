const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['localhost'], keyspace: 'rental_hosts' });


const callQuery = (query, params, callback) => {
  client.execute(query, params, { prepare : true }, (err, result) => {
    if (err) {
      console.log('there was an error?', err);
    }
    callback(result);
  });
};

module.exports = {
  callQuery,
};

// const connection = client.execute('select * from listings where id = 3333333', (err, result) => {
//   if (err) throw err;
//   console.log(result.rows[0]);
// });

// const apiFunc = (query, params, callback) => {
//   client.execute(query, params, (err, result) => {
//     if (err) {
//       console.log('error?!?!', err);
//     } else {
//       callback(result);
//     }
//   });
// };

// .then(result => console.log(result));
// client.execute(que, param, (err, res) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });
// apiFunc(que, param, (err, res) => {
//   if (err) {
//     console.log('error!!!!', err);
//   } else {
//     console.log('no erroR!?!?!?', res);
//   }
// });

// const mysql = require('mysql');
// const mockData = require('./mockdata.js');
// // connects to db and generates data.
// // has a 3 second timeout at startup.

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   // password: 'dog',
//   database: 'rental_hosts',
// });

// setTimeout(() => {
//   connection.connect((err) => {
//     if (err) {
//       console.log('Error connecting to mysql');
//     } else {
//       console.log('connected to my sql');
//     }
//   });

//   const getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max))
//   };


//   const listingDataGenerator = () => {
//     for (let i = 0; i < 100; i += 1) {
//       const featuresInt = getRandomInt(mockData.features.length);
//       const thingsToDoInt = getRandomInt(mockData.thingsToDo.length);
//       const locationLatLon = getRandomInt(mockData.locations.length);
//       const hostGuidebooksInt = getRandomInt(mockData.hostGuidebooks.length);

//       const theQuery = `INSERT INTO listings (features, things_to_do, lat_location, lon_location, host_guidebook) VALUES ('${mockData.features[featuresInt]}', '${mockData.thingsToDo[thingsToDoInt]}', ${mockData.locations[locationLatLon][0]}, ${mockData.locations[locationLatLon][1]}, '${mockData.hostGuidebooks[hostGuidebooksInt]}')`;

//       console.log(theQuery + ";");

//       connection.query(theQuery, (err, result) => {
//         if (err) {
//           console.log(err)
//         } else {
//           console.log('inserted listing data');
//         }
//       });
//     }
//   };

//   const hostsDataGenerator = () => {
//     for (let i = 0; i < 100; i += 1) {
//       const firstNameInt = getRandomInt(mockData.firstNames.length);
//       const lastNameInt = getRandomInt(mockData.lastNames.length);
//       const citiesInt = getRandomInt(mockData.cities.length);
//       const statesInt = getRandomInt(mockData.states.length);
//       const countriesInt = getRandomInt(mockData.countries.length);
//       const joinedInDateInt = getRandomInt(mockData.joinInDates.length);
//       const descriptionInt = getRandomInt(mockData.descriptions.length);
//       const emailInt = getRandomInt(mockData.emails.length);
//       const urlsInt = getRandomInt(mockData.urls.length);

//       const theQuery = `INSERT INTO hosts (first_name, last_name, city, state, country, joined_in_date, description, email, photo_url) VALUES ('${mockData.firstNames[firstNameInt]}', '${mockData.lastNames[lastNameInt]}', '${mockData.cities[citiesInt]}', '${mockData.states[statesInt]}', '${mockData.countries[countriesInt]}', '${mockData.joinInDates[joinedInDateInt]}', '${mockData.descriptions[descriptionInt]}', '${mockData.emails[emailInt]}', '${mockData.urls[urlsInt]}')`;

//       console.log(theQuery + ";");

//       connection.query(theQuery, (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('inserted hosts data');
//         }
//       });
//     }
//   };

//   const reviewsDataGenerator = (users, lists) => {
//     for (let i = 0; i < 100; i += 1) {
//       const userIdInt = getRandomInt(users) + 1;
//       const listIdInt = getRandomInt(lists) + 1;
//       const ratingInt = getRandomInt(5);

//       const theQuery = `INSERT into reviews (user_id, list_id, rating) VALUES (${userIdInt}, ${listIdInt}, ${ratingInt})`;

//       console.log(theQuery + ";");

//       connection.query(theQuery, (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('inserted reviews data');
//         }
//       });
//     }
//   };

//   listingDataGenerator();
//   hostsDataGenerator();
//   reviewsDataGenerator(100, 100);
// }, 3000);
