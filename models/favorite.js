const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  userID: { type: String, required: true },
  candidateID: { type: String, required: true },
  count: {type: Number, required: true}
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
