const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect
    // connection uri
    ();
  mongoose.connection.on("open", () => {
    console.log("mongodb connected.");
  });
  mongoose.connection.on("error", () => {
    console.log("mongodb error");
  });
};
