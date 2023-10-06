const Author = require("../models/Author");
const Book = require("../models/Book");

const mongoMethods = {
  getAllBooks: async () => await Book.find(),
  getBooksByAuthor: async (authorId) => {
    const books = await Book.find({ authorId: authorId });
    return books;
  },
  getAllAuthors: async () => await Author.find(),
  createBook: async ({ authorId, genre, name }) => {
    const book = await Book.create({ authorId, genre, name });
    return book;
  },
  getAuthorById: async (id) => {
    const author = await Author.findById(id);
    return author;
  },
  createAuthor: async ({ name, age }) => {
    const author = await Author.create({ name, age });
    return author;
  },
};

module.exports = mongoMethods;
