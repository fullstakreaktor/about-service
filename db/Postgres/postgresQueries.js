const connection = require('./connection.js')


const getUserByArea = (name, callback) => {
  const theQuery = 'select first_name, email FROM hosts where city = $1';
  connection.query(q, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};




const neighborhoodInfo = (id, callback) => {
  const theQuery = `SELECT first_name, email from hosts where list_name = ${id}`;
  connection.query(theQuery, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      callback(null, result);
    }
  })
}

const putNewUser = (id, callback) => {
  const theQuery = `INSERT INTO listing (id, features, things_to_do, lat_location, lon_location, host_guidebook) VALUES (${id}, 'beaches', 'sleep', -32, 32, 'example')`;
  connection.query(theQuery, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      callback(null, result);
    }
  })
}
// neighborhoodInfo('BaronHollyCartersMoldyPawstel', (err, res) =>{
// 	if(err) throw err;
// 	console.log(res.rows[0])
// })

putNewUser(10000001);

// connection.end(() => {
//   console.log('connection has ended')
// })