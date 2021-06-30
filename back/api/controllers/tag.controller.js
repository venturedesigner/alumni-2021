const { tagModel } = require('../models/tag.model')

exports.getTags = (req, res) => {
  tagModel
    .find()
    .then(tags => { res.status(200).json(tags) }
    )
    .catch(err => { res.status(500).json({ mag: 'An error ocurred trying to get all tags', err }) })
}

exports.createTag = (req, res) => {
  tagModel
    .create(req.body)
    .then(tag => {
      res.status(201).json(tag)
    })
    .catch(err => {
      res.status(500).json({ msg: 'An error ocurred while creating the tag', err })
    })
}

exports.deleteTag = (req, res) => {
  tagModel
    .findByIdAndDelete(req.params.tagId)
    .then(tag => {
      channelModel
        .find({ tags: req.params.tagId })
        .then(channels => {
          channels.forEach(channel => {
            channel.tags.remove(tag.id)
            channel.save()
          })
          res.json({ msg: 'Tag deleted' })
        })
        .catch(err => {
          res.json(err)
        })
    })
    .catch(err => {
      res.json(err)
    })
}
