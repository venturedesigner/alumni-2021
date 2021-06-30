const { checkAuth, isAdmin } = require('../../utils')

const {
  getTags,
  createTag,
  deleteTag
} = require('../controllers/tag.controller')

const router = require('express').Router()

router.get('/', checkAuth, getTags)
router.post('/', checkAuth, isAdmin, createTag)
router.delete('/:tagId', checkAuth, isAdmin, deleteTag)

exports.tagRouter = router
