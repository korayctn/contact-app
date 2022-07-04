const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({

  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 10,
    unique: true,
  },
  
  password: {
    type: String,
    required: true,
    minLength: 2,
  },
});

module.exports = mongoose.model("UserSchema", UserSchema);
