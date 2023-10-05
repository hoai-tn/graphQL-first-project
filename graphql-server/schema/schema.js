export const typeDefs = `#graphql
  type Book {
    id: ID
    name: String
    genre: String
  }

  type Query {
    books: [Book]
  }
`;
