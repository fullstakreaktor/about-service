-- CREATE KEYSPACE
CREATE KEYSPACE IF NOT EXISTS rental_hosts WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE rental_hosts;


-- CREATE TABLES
CREATE TABLE rental_hosts.hosts
(
  id int PRIMARY KEY,
  first_name text,
  last_name text,
  city text,
  state text,
  country text,
  joined_in_date text,
  references_count int,
  verified boolean,
  description text,
  response_rate float,
  response_time int,
  languages text,
  email text,
  avatar_url text
);

CREATE TABLE
IF NOT EXISTS rental_hosts.listings
(
  id int PRIMARY KEY,
  features text,
  things_to_do text,
  lat_location decimal,
  lon_location decimal,
  host_guidebook text
);

CREATE TABLE
IF NOT EXISTS rental_hosts.hostsReviews
(
  id int PRIMARY KEY,
  first_name text,
  last_name text,
  city text,
  state text,
  country text,
  joined_in_date text,
  references_count int,
  verified boolean,
  description text,
  response_rate float,
  response_time int,
  languages text, 
  email text,
  avatar_url text,
  reviews_id int,
  reviews_list_id int,
  reviews_rating int
);

-- SEED TO TABLES (following comments are timers)
copy rental_hosts.hosts
(id, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, languages, email, avatar_url) 
from '/Users/kerogiro/airgb/about-service/db/sdc/csvTables/hostsTable.csv'
with delimiter=',';

-- Starting copy
-- of rental_hosts.hosts
-- with columns [id, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, languages, email, avatar_url].
-- Processed:
-- 10000000 rows;
-- Rate:
-- 7126 rows/s; Avg.
-- rate:
-- 13381 rows/s
-- 10000000 rows imported from 1 files in 12 minutes and 27.368 seconds
-- (0 skipped).

copy rental_hosts.listings
(id, features, things_to_do, lat_location, lon_location, host_guidebook) from
'/Users/kerogiro/airgb/about-service/db/sdc/csvTables/listingsTable.csv'
with delimiter = ',';

-- Starting copy
-- of rental_hosts.listings
-- with columns [id, features, things_to_do, lat_location, lon_location, host_guidebook].
-- Processed:
-- 10000000 rows;
-- Rate:
-- 8809 rows/s; Avg.
-- rate:
-- 14980 rows/s10000000 rows imported from 1 files in 11 minutes and 7.539 seconds
-- (0 skipped).

copy rental_hosts.hostsreviews
(id, first_name, last_name, city, state, country, joined_in_date, references_count,
verified, description, response_rate, response_time, languages, email, avatar_url, reviews_id,
reviews_list_id, reviews_rating) from 
'/Users/kerogiro/airgb/about-service/db/sdc/csvTables/joinedHostsReviews.csv'
with delimiter = ',';

-- Starting copy
-- of rental_hosts.hostsreviews
-- with columns [id, first_name, last_name, city, state, country, joined_in_date, references_count, verified, description, response_rate, response_time, languages, email, avatar_url, reviews_id, reviews_list_id, reviews_rating].
-- Processed:
-- 10000000 rows;
-- Rate:
-- 7351 rows/s; Avg.
-- rate:
-- 12729 rows/s
-- 10000000 rows imported from 1 files in 13 minutes and 5.607 seconds
-- (0 skipped).
