-- DROP KEYSPACE IF EXISTS rental_hosts;
-- CREATE KEYSPACE rental_hosts 
-- with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE rental_hosts;

CREATE TABLE hosts (
  id int PRIMARY KEY,
  first_name text,
  last_name text,
  join_in_date text,
  email text,
  verified boolean,
  references_count int,
  response_rate decimal,
  response_time int,
  languages text,
  photo_url text,
  city text,
  state text,
  country text
);

CREATE TABLE listings (
  id int PRIMARY KEY,
  city text,
  country text,
  state text,
  description text,
  host_id  int,
  lat_location float,
  listing_name text,
  lon_location float,
  photo_url text,
  rating int,
  things_to_do text,
  first_name text
);

CREATE TABLE rental_hosts.reviews (
  id int PRIMARY KEY,
  list_id int,
  numReviews int,
  rating int
);

CREATE TABLE rental_hosts.listing_firstname (
  first_name text PRIMARY KEY,
  list_id int
);

CREATE TABLE listingid_hostid (
host_id int PRIMARY KEY,
listing_id int);


-- test inserting to hosts
-- INSERT INTO hosts (first_name, last_name, location, joined_in_date, verified, description, response_rate, response_time, languages, email) VALUES ('JOYCE', 'CHO', 'SAN FRANCISCO', '2012-05-20', 1, 'House privileges nice view?', 0.939431894, 1, "English", "helloworld@world.com");
--
-- INSERT INTO listings (features) VALUES ('foggy and windy');
-- -- test inserting to reviews
-- INSERT INTO reviews (user_id, rating, list_id) VALUES (1, 4 , 1);
--
-- -- test selecting from multiple tables
-- select first_name, rating, features FROM hosts, reviews, listings where reviews.user_id = hosts.id and reviews.list_id = listings.id;
