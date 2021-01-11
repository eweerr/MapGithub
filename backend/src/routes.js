const express = require("express");
const routes = express.Router();

const SessionController = require("./controllers/Sessions");
const SearchController = require("./controllers/SearchController");

routes.get("/", (req, res) => res.json({ message: "The Routes Work!" }));

routes.get("/devs", SessionController.index);
routes.post("/devs", SessionController.store);

routes.get("/search", SearchController.index);
routes.post("/search", SearchController.store);

module.exports = routes;
