const app = require("express")();
const cors = require("cors");

const pokemonsController = require("./controllers/pokemons")

app.use(cors());

app.use('/pokemons', pokemonsController)

module.exports = app;