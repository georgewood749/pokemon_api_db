const router = require('express').Router();

const Pokemon = require('../models/pokemon');

router.get('/', async (req, res) => {
    try {
        const pokemons = await Pokemon.all
        res.status(200).json({ data: pokemons })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err })
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const pokemon = await Pokemon.getById(id)
        res.status(200).json(pokemon)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err })
    }
});

module.exports = router