const mongoose = require("mongoose");
const PointSchema = require("./utils/pointSchema");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    github_username: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    avatar_url: {
      type: String,
      required: false,
    },
    techs: {
      type: [String],
      required: false,
    },
    location: {
      type: PointSchema,
      index: "2dsphere",
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
