const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Book", BookSchema);
