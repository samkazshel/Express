const express = require("express");

const app = express();

const route = require("./routes/route.js");

app.use(express.json());
app.use("/book", route);

const server = app.listen(5015, () => {
  console.log("Listening on port 5015");
});
