const testDB = true;
let dbURI;

if (testDB == true) {
  dbURI = "testLibrary";
} else {
  dbURI = "Library";
}

const express = require("express");

const library = require("./routes/library.js");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const errorLogger = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message);
};

mongoose.connect(
  `mongodb://localhost:27017/${dbURI}`,
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log(`Error, cant connect to database: ${error}`);
    } else {
      console.log("No error!");
    }
  }
);

app.use("/library", library);
app.use(errorLogger);

const server = app.listen(5015, () => {
  console.log("listening on port 5015");
});

module.exports = server;
