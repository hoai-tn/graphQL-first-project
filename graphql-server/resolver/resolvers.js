 const books = [
  {
    id: 1,
    name: "The Awakening",
    genre: "Kate Chopin",
  },
  {
    id: 2,
    title: "City of Glass",
    genre: "Paul Auster",
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
};

