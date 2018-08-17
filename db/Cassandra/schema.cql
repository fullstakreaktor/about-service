DROP KEYSPACE IF EXISTS aboutInfo;

CREATE KEYSPACE aboutInfo WITH replication = {'class':'SimpleStrategy','replication_factor':1};

USE aboutInfo;

DROP TABLE IF EXISTS about_service;
DROP TABLE IF EXISTS listing;
DROP TABLE IF EXISTS rating;

CREATE TABLE about_service (
  list_id int, 
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
  email text,
  features text, 
  things_to_do text, 
  lat_location decimal, 
  lon_location decimal, 
  rating int ,
  PRIMARY KEY (city, state)
);

-- INSERT INTO about_service(list_id, list_name, first_name, last_name, city, state, country, joined_in_date, references_count,
-- verified, description, response_rate, response_time, language, email, features, things_to_do, lat_location, lon_location, rating)
-- VALUES
-- (2500001, 'laLakes', 'lebron', 'james', 'la', 'California', 'USA', 'Dec12', 3, true, 'best nba team', 
--   2, 3, 'english', 'lebronJames@gmail.com', 'city vibes', 'surf', 40.33, 94.22, 5 )

--  CREATE TABLE  listing (
--   features text PRIMARY KEY,
--   things_to_do text,
--   lat_location decimal,
--   lon_location decimal
-- );

-- CREATE TABLE rating (
--   rating int PRIMARY KEY
-- );

COPY about_service (list_id, list_name, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, language, email, features, things_to_do, lat_location, lon_location, rating) 
                FROM '/Users/gauravgulati/desktop/sdc/about-service/db/Cassandra/CSV/firstEntireDataSet.csv' with HEADER=false and DELIMITER=',';


COPY about_service (list_id, list_name, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, language, email, features, things_to_do, lat_location, lon_location, rating) 
                FROM '/Users/gauravgulati/desktop/sdc/about-service/db/Cassandra/CSV/secondEntireDataSet.csv' with HEADER=false and DELIMITER=',';

COPY about_service (list_id, list_name, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, language, email, features, things_to_do, lat_location, lon_location, rating) 
                FROM '/Users/gauravgulati/desktop/sdc/about-service/db/Cassandra/CSV/thirdEntireDataSet.csv' with HEADER=false and DELIMITER=',';

COPY about_service (list_id, list_name, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, language, email, features, things_to_do, lat_location, lon_location, rating) 
                FROM '/Users/gauravgulati/desktop/sdc/about-service/db/Cassandra/CSV/fourthEntireDataSet.csv' with HEADER=false and DELIMITER=',';
