const Author = require("../models/Author");

const books = [
  {
    id: 1,
    name: "The Awakening",
    genre: "Kate Chopin",
    authorId: 1,
  },
  {
    id: 2,
    name: "City of Glass",
    genre: "Paul Auster",
    authorId: 2,
  },
  {
    id: 3,
    name: "Love and gain",
    genre: "Roma Auster",
    authorId: 3,
  },
  {
    id: 4,
    name: "Action",
    genre: "Last fight",
    authorId: 1,
  },
];

const authors = [
  {
    id: 1,
    name: "alex",
    age: 25,
  },
  {
    id: 2,
    name: "alex1",
    age: 32,
  },
  {
    id: 3,
    name: "alex3",
    age: 32,
  },
];
const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id == args.id),
    authors: async (parent, args, context) => {
      console.log({context});
      const authors = await context.mongoMethods.getAllAuthors();
      return authors;
    },
    author: async (parent, args, context) => {
      const result = await Author.findById(args.id);
      return result;
    },
  },
  Book: {
    author: (parent, args) => {
      return authors.find((author) => author.id == parent.authorId);
    },
  },
  Author: {
    books: (parent, args) => {
      return books.filter((book) => book.authorId == parent.id);
    },
  },

  //Mutation
  Mutation: {
    createAuthor: async (parent, { name, age }) => {
      const data = await Author.create({ name, age });
      return data;
    },
    createBook: (parent, args) => {
      return args;
    },
  },
};

module.exports = resolvers;
