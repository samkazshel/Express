//importing express package as a variable
const express = require("express");

//creating a variable called app that is equal to express
//initialising our app
const app = express();

//telling our app to run on a port
const server = app.listen(5015, () => {
  console.log(`Server running on port ${server.address().port}`);
});
