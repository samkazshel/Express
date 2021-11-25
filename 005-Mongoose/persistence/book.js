//import mongoose
const mongoose = require("mongoose");
//Use only schema and Model
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
    minlength: 0,
  },

  author: {
    type: String,
    required: false,
  },
  yearReleased: {
    type: Number,
    min: 0,
    max: 2021,
  },
  isHardBack: Boolean,
});

const Book = model("Book", bookSchema);

module.exports = { Book: Book };
