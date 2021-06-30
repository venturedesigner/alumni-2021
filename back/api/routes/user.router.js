const { checkAuth, isAdmin, isModerator } = require('../../utils')
const {
  getProfile,
  createProfile,
  updateRoleRequestInfo,
  changeTypeOfUser
} = require('../controllers/user.controller')
const router = require('express').Router()

router.get('/:userId/profile', checkAuth, getProfile)
router.post('/profile', checkAuth, createProfile)
router.post('/users', checkAuth, isAdmin, changeTypeOfUser)

exports.userRouter = router
