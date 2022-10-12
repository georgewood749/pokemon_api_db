const { pool } = require('../initdb');

class Pokemon {
    constructor(data) {
        this.id = data._id
        this.pokeId = data.pokeId
        this.name = data.name;
        this.type = data.type;
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const pokemonsData = await pool.query(`SELECT * FROM pokemons;`)
                const pokemons = pokemonsData.rows.map(d => new Pokemon(d))
                if (!pokemons.length) { throw new Error('No pokemon here!') }
                resolve(pokemons);
            } catch (err) {
                reject(`Error retrieving pokemons: ${err.message}`)
            }
        })
    }

    static getById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const pokemonData = await pool.query(`SELECT * FROM pokemons WHERE id = $1;`, [id])
                const pokemon = new Pokemon(pokemonData.rows[0])
                if (!pokemon) { throw new Error('No pokemon here!') }
                resolve(pokemon);
            } catch (err) {
                reject(`Error retrieving pokemon: ${err.message}`)
            }
        })
    }
}

module.exports = Pokemon;