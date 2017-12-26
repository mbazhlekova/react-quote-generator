const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  quoteAuthor: String,
  quoteText: String
});