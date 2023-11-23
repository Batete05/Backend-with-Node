const mongoose = require("mongoose");

connection=
mongoose.connect("mongodb://127.0.0.1:27017/nadette")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const logInSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpwd: {
    type: String,
    required: true,
  },
});

const collection =  mongoose.model("collection", logInSchema);

module.exports = collection;
