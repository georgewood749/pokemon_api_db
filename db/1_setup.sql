-- 1_setup.sql
DROP TABLE IF EXISTS pokemons;

CREATE TABLE pokemons (
    id int NOT NULL,
    name varchar(255) NOT NULL,
    type int NOT NULL,
);