const { checkAuth, isAdmin, isModerator } = require('../../utils')
const {
  getProfile,
  getMyChannels,
  getFollowedChannels,
  createProfile,
  updateRoleRequestInfo,
  changeTypeOfUser,
  makeCreator
} = require('../controllers/user.controller')
const router = require('express').Router()

router.get('/:userId/profile', checkAuth, getProfile)
router.get('/mychannels', checkAuth, getMyChannels)
router.post('/profile', checkAuth, createProfile)
router.post('/creator', checkAuth, updateRoleRequestInfo)
router.post('/users', checkAuth, isAdmin, changeTypeOfUser)
router.post('/users', checkAuth, isModerator, makeCreator)

exports.userRouter = router
