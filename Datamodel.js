// models/DataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name          : String,
  age           : Number,
  readinglevels : String,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
