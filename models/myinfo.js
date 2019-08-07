const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//myinfo schema
const myinfoSchema = new Schema({
  state: {type: String, required: true},
  election_date: {type: String, required: true},
  mail_voting: {type: String, required: true},
  early_voting: {type: String, required: true}
});

const Myinfo = mongoose.model("Myinfo", myinfoSchema);

module.exports = Myinfo;