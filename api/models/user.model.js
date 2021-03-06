const mongoose = require('mongoose')
const { profileSchema } = require('./profile.schema')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
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
  },
  // typeofuser: {
  //   type: String,
  //   enum: ['Moderator', 'Creator', 'User', 'Admin'],
  //   default: 'User'
  // },
  profile: profileSchema,
  verified: Boolean,
  
})

exports.userModel = mongoose.model('user', userSchema)
