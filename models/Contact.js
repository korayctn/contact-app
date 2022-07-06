const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Users = require("../models/User");

const ContactSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 13,
    required: true,
  },
  surname: {
    type: String,
    minLength: 2,
    maxLength: 14,
    required: true,
  },
  email: {
    type: String,
    minLength: 6,
    maxLength: 30,
    unique: true,
  },
  phoneNum: {
    type: String,
    minLength: 10,
    maxLength: 10,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("ContactSchema", ContactSchema);
