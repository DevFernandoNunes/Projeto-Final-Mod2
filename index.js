/* Constantes */
require("dotenv").config();
const express = require("express");
const { required } = require("nodemon/lib/config");
const app = express();

const path = require("path");

/* Configuração do servidor */
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

/* Rodando servidor */
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log("servidor rodando em http://localhost:3000/")
);
