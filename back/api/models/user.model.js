const mongoose = require('mongoose')
const { profileSchema } = require('./profile.schema')
const { creatorSchema } = require('./creator.schema')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'UserName is required'],
    unique: [true, 'This UserName is already taken, try anothe one']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "This email doesn't follow the requirements"
    ]
  },
  dateofbirth: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  typeofuser: {
    type: String,
    enum: ['Moderator', 'Creator', 'User', 'Admin'],
    default: 'User'
  },
  channelsfollowed: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'channel'
  }],
  postsliked: Array,
  mychannels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'channel',
    default: []
  }],
  creatorinfo: creatorSchema,
  profile: profileSchema,
  indentification: String,
  verified: Boolean,
  
})

exports.userModel = mongoose.model('user', userSchema)