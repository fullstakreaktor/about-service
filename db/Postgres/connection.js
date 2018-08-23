var pgp = require('pg-promise')({
    // Initialization Options
});


// const cn = {
//     host: 'ec2-18-220-146-217.us-east-2.compute.amazonaws.com',
//     port: 5432,
//     database: 'aboutInfo'
// };

const dbPG = pgp('postgres://gauravgulati@ec2-18-222-158-107.us-east-2.compute.amazonaws.com:5432/aboutInfo');hi

const getHostInfo = (id) => {
	var promise = dbPG.any(`select id, first_name, last_name, email from hosts where id = '${id}' LIMIT 1 `)

	return promise;
}


const getListingByLoc = (state, city) => {
	var promise = dbPG.any(`SELECT list_name, first_name from hosts WHERE  state = '${state}' AND city = '${city}' LIMIT 1;`);

	return promise;
}

const selectHostInfo = (id) => {
	 return dbPG.any(`select * from hosts where id = ${id}`);
}

const neighborhoodInfo = (id, callback) => {
	return dbPG.any(`select id, features, things_to_do, lat_location, lon_location from listing where id = ${id}`);
}

const reviewsForHost = (id) => {
	return dbPG.any(`select id, review_num from reviews where id = ${id}`);
}
const updateADA = (id) => {
	var promise = dbPG.any(`UPDATE listing SET features = 'wheelchair compliant' WHERE id = '${id}' `);

	return promise;
};

getHostInfo(5).then(function(data){
	console.log(data); 
})

module.exports = { pgp, getHostInfo, getListingByLoc, selectHostInfo, neighborhoodInfo, reviewsForHost };
