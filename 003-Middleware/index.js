const express = require("express");
const cors = require("cors");
const snakeNames = require("snake-names");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  let x = Math.floor(Math.random() * 100 + 1);
  console.log(x);
  next();
});

app.use((req, res, next) => {
  console.log(snakeNames.famousRandom());
});

app.get("/test", (req, res) => {
  console.log("Site Accessed");
  res.send("site accessed");
});

const server = app.listen(5015, () => {
  console.log(`server is running on ${server.address().port}`);
});
