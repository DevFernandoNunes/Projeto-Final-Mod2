const routes = require("express").Router();
const PokemonController = require("../controllers/PokemonController");
const Pokemon = require("../models/Pokemon");

routes.get("/", PokemonController.getAll);
routes.get("/signup", PokemonController.signup);
routes.post("/create", PokemonController.create);
routes.post("/getById/:id/:method", PokemonController.getById);

module.exports = routes;
