DROP DATABASE IF EXISTS aboutInfo;
CREATE DATABASE aboutInfo;

DROP TABLE IF EXISTS hosts CASCADE;
DROP TABLE IF EXISTS listing CASCADE;
DROP TABLE IF EXISTS ratings CASCADE;

CREATE TABLE hosts (
  id SERIAL PRIMARY KEY,
  list_name varchar(300) NOT NULL,
  first_name varchar(100) NOT NULL,
  last_name varchar(255) NOT NULL,
  city varchar(255)  NOT NULL,
  state varchar(255)  NOT NULL,
  country varchar(255)  NOT NULL,
  joined_in_date varchar(255) NOT NULL,
  references_count integer,
  verified boolean DEFAULT false,
  description varchar(1000) NOT NULL,
  response_rate integer DEFAULT 0,
  response_time integer DEFAULT 0,
  languages varchar(255) NOT NULL,
  email varchar(255) NOT NULL
  
);


CREATE TABLE listing (
  id SERIAL PRIMARY KEY,
  features varchar(500),
  things_to_do varchar(500),
  lat_location decimal(3),
  lon_location decimal(3),
  host_guidebook varchar(255)

);


CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  rating integer NOT NULL,
  host_id integer REFERENCES hosts(id),
  listing_id integer REFERENCES listing(id)

);


copy hosts (list_name, first_name, last_name, city, 
	state, country, joined_in_date, references_count, verified, 
	description, response_rate, response_time, languages, email) 
from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/host/firstFourthOfHostTable.csv' DELIMITERS ',' CSV;

copy hosts (list_name, first_name, last_name, city, 
	state, country, joined_in_date, references_count, verified, 
	description, response_rate, response_time, languages, email) 
from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/host/secondFourthOfHostTable.csv' DELIMITERS ',' CSV;

copy hosts (list_name, first_name, last_name, city, 
	state, country, joined_in_date, references_count, verified, 
	description, response_rate, response_time, languages, email) 
from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/host/thirdFourthOfHostTable.csv' DELIMITERS ',' CSV;

copy hosts (list_name, first_name, last_name, city, 
	state, country, joined_in_date, references_count, verified, 
	description, response_rate, response_time, languages, email) 
from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/host/fourFourthOfHostTable.csv' DELIMITERS ',' CSV;

copy listing (features, things_to_do, lat_location, lon_location) from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/listings/first_listingsTableData.csv' DELIMITERS ',' CSV;
copy listing (features, things_to_do, lat_location, lon_location) from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/listings/second_listingsTableData.csv' DELIMITERS ',' CSV;

copy ratings(rating, host_id, listing_id) from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/ratings/ratingsTable.csv' DELIMITERS ',' CSV;