-- DROP KEYSPACE IF EXISTS aboutInfo;

CREATE KEYSPACE aboutInfo WITH replication = {'class':'SimpleStrategy','replication_factor':1};

USE aboutInfo;

DROP TABLE IF EXISTS about_service;
DROP TABLE IF EXISTS listing;
DROP TABLE IF EXISTS rating;

CREATE TABLE about_service (
  list_id int PRIMARY KEY,
  list_name text,
  first_name text,
  last_name text,
  city text,
  state text,
  country text,
  joined_in_date text,
  references_count int,
  verified boolean,
  description text,
  response_rate int,
  response_time int,
  language text,
  email text
);

 CREATE TABLE  listing (
  features text PRIMARY KEY,
  things_to_do text,
  lat_location decimal,
  lon_location decimal
);

CREATE TABLE rating (
  rating int PRIMARY KEY
);

COPY about_service (list_id, list_name, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, language, email) 
                FROM '/Users/gauravgulati/desktop/sdc/about-service/db/Cassandra/csv/host/firstFourthOfHostTable.csv' with HEADER=false and DELIMITER=',';
COPY about_service (list_id, list_name, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, language, email) 
                FROM '/Users/gauravgulati/desktop/sdc/about-service/db/Cassandra/csv/host/secondFourthOfHostTable.csv' with HEADER=false and DELIMITER=',';
COPY about_service (list_id, list_name, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, language, email) 
                FROM '/Users/gauravgulati/desktop/sdc/about-service/db/Cassandra/csv/host/thirdFourthOfHostTable.csv' with HEADER=false and DELIMITER=',';
COPY about_service (list_id, list_name, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, language, email) 
                FROM '/Users/gauravgulati/desktop/sdc/about-service/db/Cassandra/csv/host/fourFourthOfHostTable.csv' with HEADER=false and DELIMITER=',';


copy listing (features, things_to_do, lat_location, lon_location) from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/listings/first_listingsTableData.csv' with HEADER=false and DELIMITER=',';
copy listing (features, things_to_do, lat_location, lon_location) from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/listings/second_listingsTableData.csv' with HEADER=false and DELIMITER=',';

copy rating (rating) from '/Users/gauravgulati/desktop/SDC/about-service/db/Cassandra/csv/rating/ratingsTable.csv' with HEADER=false and DELIMITER=',';