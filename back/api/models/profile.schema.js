const mongoose = require('mongoose')
const { channelModel } = require('./channel.model')

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
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }],
  dateofbirth: Date,
  likedposts: Array,
  orientation: [String],
  interest: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tag'
  }],
  socialnetworks: [String]
})
