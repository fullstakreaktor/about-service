var pgp = require('pg-promise')({
    // Initialization Options
});


const cn = {
    host: 'localhost',
    port: 5432,
    database: 'aboutInfo'
};

const dbPG = pgp(cn);

const getHostInfo = (id) => {
	var promise = dbPG.any(`select id, first_name, last_name, email from hosts where id = '${id}' LIMIT 1 `)

	return promise;
}

const getListingByLoc = (state, city) => {
	var promise = dbPG.any(`SELECT list_name, first_name from hosts WHERE  state = '${state}' AND city = '${city}' LIMIT 1;`);

	return promise;
}

const updateADA = (id) => {
	var promise = dbPG.any(`UPDATE listing SET features = 'wheelchair compliant' WHERE id = '${id}' `);

	return promise;
};
//getHostInfo("BaronHollyMertzsRottenPawstel")

module.exports = { pgp, getHostInfo, getListingByLoc, updateADA };
