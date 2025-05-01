const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  year: String,
  degree: String,
  project: String,
  hobbies: String,
  certificates: String,
  internship: String,
  aim: String,
  email: String,
  image: String,
  file: String
});

module.exports = mongoose.model('Member', MemberSchema);