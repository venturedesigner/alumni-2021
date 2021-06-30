const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'This tag already exists'],
    required: [true, 'Tag name field is required']
  },
  description: {
    type: String,
    required: [true, 'Description field is required'],
    minLength: [15, 'Descripction should have more characters than 15']
  },
  channels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'channel'
  }]
})

exports.tagModel = mongoose.model('tag', tagSchema)
