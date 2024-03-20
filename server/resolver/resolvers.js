const resolvers = {
  Query: {
    books: async (parent, args, { mongoMethods }) => {
      const books = await mongoMethods.getAllBooks();
      return books;
    },
    book: async (parent, args, { mongoMethods }) => {
      const book = await mongoMethods.getBookById(args.id);
      return book;
    },
    authors: async (parent, args, { mongoMethods }) => {
      const authors = await mongoMethods.getAllAuthors(args);
      return authors;
    },
    author: async (parent, args, { mongoMethods }) => {
      const author = await mongoMethods.getAuthorById(args.id);
      return author;
    },
  },
  Book: {
    author: async (parent, args, { mongoMethods }) => {
      const author = await mongoMethods.getAuthorById(parent.authorId);
      return author;
    },
  },
  Author: {
    books: async (parent, args, { mongoMethods }) => {
      const books = await mongoMethods.getBooksByAuthor(parent.id);
      return books;
    },
  },

  //Mutation
  Mutation: {
    createAuthor: async (parent, args, { mongoMethods }) => {
      const data = await mongoMethods.createAuthor(args);
      return data;
    },
    createBook: async (parent, args, { mongoMethods }) => {
      const book = await mongoMethods.createBook(args);
      return book;
    },
  },
};

module.exports = resolvers;
