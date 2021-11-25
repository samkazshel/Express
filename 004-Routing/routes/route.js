const router = require("express").Router();

router.get("/", () => {
  console.log("Site had been accessed");
});

router.get("/hello", () => {
  console.log("Hello wow");
});

//to add a query parameter (such as id user :variable name)
router.get("/get/:id", (req, res) => {
  console.log(req.params.id);

  res.status(200).send(`${req.params.id}`);
});

router.get("/getAll", (req, res) => {
  const body = req.body;
  console.log(body);
  res.status(200).send(body);
});

//pass in a body as a request
router.post("/create", (req, res) => {
  const body = req.body;
  console.log(body);

  res.status(201).send(body);
});

router.delete("/delete/:id", (req, res) => {
  console.log(`object of id: ${req.params.id} has been deleted`);
  res.status(204).send(`id`);
});

router.put("/update/:id", (req, res) => {
  console.log(`update book of id: ${req.params.id}`);
  const id = req.params.id;
  console.log("id: ", id);
  const body = req.body;
  console.log("Body: ", req.body);
});

router.patch("/update/:id", (req, res) => {
  const id = req.params.id;
  console.log("id: ", id);
  const author = req.query.author;
  console.log("author: ", author);
  //   const title = req.query.title;
  //   console.log("title: ", title);
  res.status(202).send(`object of id: ${id} has been patched`);
});

module.exports = router;
