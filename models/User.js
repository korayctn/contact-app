const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    minLength: 2,
    maxLength: 10,
    unique: true,
  },
  password: {
    type: String,
    minLength: 2,
    maxLength: 10,
  },
});

module.exports = mongoose.model("UserSchema", UserSchema);
