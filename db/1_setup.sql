-- 1_setup.sql
DROP TABLE IF EXISTS pokemons;

CREATE TABLE pokemons (
    id serial PRIMARY KEY,
    pokeId int NOT NULL,
    name varchar(255) NOT NULL,
    type varchar(255) NOT NULL
);