DROP DATABASE IF EXISTS aboutInfo;
CREATE DATABASE aboutInfo;

DROP TABLE IF EXISTS hosts CASCADE;

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



-- need to change url names + get rid of headers in csv files

copy hosts (list_name, first_name, last_name, city, 
	state, country, joined_in_date, references_count, verified, 
	description, response_rate, response_time, languages, email) 
from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/firstFourthOfHostTable.csv' DELIMITERS ',' CSV;

copy hosts (list_name, first_name, last_name, city, 
	state, country, joined_in_date, references_count, verified, 
	description, response_rate, response_time, languages, email) 
from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/secondFourthOfHostTable.csv' DELIMITERS ',' CSV;

copy hosts (list_name, first_name, last_name, city, 
	state, country, joined_in_date, references_count, verified, 
	description, response_rate, response_time, languages, email) 
from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/thirdFourthOfHostTable.csv' DELIMITERS ',' CSV;

copy hosts (list_name, first_name, last_name, city, 
	state, country, joined_in_date, references_count, verified, 
	description, response_rate, response_time, languages, email) 
from '/Users/gauravgulati/desktop/SDC/about-service/db/Postgres/csvFiles/fourthFourthOfHostTable.csv' DELIMITERS ',' CSV;

