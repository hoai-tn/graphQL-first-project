const Author = require("../models/Author");
const Book = require("../models/Book");

const mongoMethods = {
  getAllBooks: async () => await Book.find(),
  getBookById: async (id) => {
    const book = await Book.findById(id);
    return book;
  },
  getBooksByAuthor: async (authorId) => {
    const books = await Book.find({ authorId: authorId });
    return books;
  },
  getAllAuthors: async ({ limit = 25, offset = 0, isGetAll }) => {
    console.log({isGetAll});
    let authors = [];
    if (isGetAll) authors = await Author.find();
    else authors = await Author.find().skip(offset).limit(limit);
    return authors;
  },
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
