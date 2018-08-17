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

neighborhoodInfo('BaronHollyCartersMoldyPawstel', (err, res) =>{
	if(err) throw err;
	console.log(res.rows[0])
})

// connection.end(() => {
//   console.log('connection has ended')
// })