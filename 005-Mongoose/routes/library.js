//import router
const router = require("express").Router();

//import book model
const { Book } = require("../persistence/book.js");
const error = require;

router.post("/create", (req, res, next) => {
  const book = new Book(req.body);
  console.log(req.body);
  console.log(book);

  book
    .save()
    .then((result) => {
      res.status(201).send(`${result} saved to database!`);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/getAll", (req, res) => {
  Book.find((error, bookList) => {
    if (error) {
      console.log(`error : (: ${error}`);
    }
    res.status(200).send(bookList);
  });
});

router.get("/getId/:id", (req, res, next) => {
  console.log(req.params.id);
  Book.findById(req.params.id, (error, result) => {
    if (error) {
      //if an error is caught throw it to an error logger
      next(error);
    } else {
      res.status(200).send(result);
    }
  });
});

router.get("/getAuthor/:author", (req, res, next) => {
  const author = req.params.author;
  console.log(author);
  Book.find({ author: author }, (error, result) => {
    if (error) {
      next(error);
    }
    res.status(200).send(result);
  });
});

router.delete("/delete/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Book.findByIdAndDelete(id, (error) => {
    if (error) {
      next(error);
    }
    res.status(202).send("Deleted!");
  });
});

//need to add the rest of the crub methods and some custom queries

module.exports = router;
