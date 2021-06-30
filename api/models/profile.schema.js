const mongoose = require('mongoose')

exports.profileSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  profilepic: {
    type: String,
    required: [true, 'Please introduce a pic']
  },
  profilebg: String,
  description: String,
  title: String,
  education: String,
  experience: String,
  goals: String,
  skills: [String],
  interest: [String],
  socialnetworks: [String]
})
