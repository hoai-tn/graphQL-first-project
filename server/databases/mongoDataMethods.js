const Author = require("../models/Author");

const mongoDataMethods = {
  getAllAuthors: async (id) => await Author.find(id),
};

module.exports = mongoDataMethods;
