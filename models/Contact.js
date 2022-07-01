const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 10,
  },
  surname: {
    type: String,
    minLength: 2,
    maxLength: 10,
  },
  phoneNum: {
    type: String,
  },
});

module.exports = mongoose.model("ContactSchema", ContactSchema);
