const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
  username: String,
  password: String,
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    }
  },
  bio: String,
  location: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;