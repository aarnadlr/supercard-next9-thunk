const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  password: {
    type: String,
    required: false
  },
  // we want a `date`
  register_date: {
    type: Date,
    default: Date.now,
    required: true
  },
  purchased_cards:{
    type: String,
    required: false
  }
});

module.exports = mongoose.model('user', UserSchema);
