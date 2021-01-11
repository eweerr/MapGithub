const api = require("../services/Api");
const Users = require("../models/Users");
const parseStringAsArray = require("../utils/parseStringAsArray");
const findConnections = require("../websocket");
const sendMessage = require("../websocket");

module.exports = {
  async index(req, res) {
    const users = await Users.find();
    return res.json(users);
  },
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    const vetTechs = parseStringAsArray(techs);
    const location = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    try {
      let user = await Users.findOne({ github_username });
      if (!user) {
        const response = await api.get(`/users/${github_username}`);
        const { name = login, avatar_url, bio } = response.data;

        user = await Users.create({
          name,
          avatar_url,
          bio,
          github_username,
          techs: vetTechs,
          location,
        });
      }

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        vetTechs
      );

      sendMessage(sendSocketMessageTo, "new-dev", dev);

      return res.json({ usuario: user });
    } catch (error) {
      console.log(error);
    }
  },
  destroy(req, res) {},
  update(req, res) {},
};
