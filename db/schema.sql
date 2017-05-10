CREATE DATABASE burgers_db;
USE burgers_db;

-- use db_name;
-- source backup-file.sql;

-- SHOW DATABASES;
-- use db_name;
-- SHOW tables;

-- desc tableName;


CREATE TABLE burgers(
	id Int(11) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL Default '0',
	date_id TIMESTAMP,

	PRIMARY KEY( id )
);

