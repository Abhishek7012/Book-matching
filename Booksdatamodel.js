// backend/Booksdatamodel.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  cover: String,
  name: String,
  Genres: String,
  description: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;