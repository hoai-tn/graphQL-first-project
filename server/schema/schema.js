const typeDefs = `#graphql
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int,
    books: [Book]
  }
  type Query {
    books: [Book]
    book (id: ID!): Book
    authors(offset: Int, limit: Int, isGetAll: Boolean): [Author]
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor(name: String, age: Int): Author,
    createBook(name: String, genre: String, authorId: ID!): Book
  }
`;

module.exports = typeDefs;
