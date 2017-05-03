CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id Int(11) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL Default '0',
	date_id TIMESTAMP,

	PRIMARY KEY( id )
);

