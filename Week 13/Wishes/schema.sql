-- CREATE DATABASE wishes_db;
USE wishes_db;
-- DROP TABLE wishes;
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES ('Today I drew a picture of my friends and I buying kale.');
INSERT INTO wishes (wish) VALUES ('Shaan made a song.');
INSERT INTO wishes (wish) VALUES ('Davon is rich. He is flipping houses.');
