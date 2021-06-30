const { checkAuth, isAdmin, isModerator } = require('../../utils')
const {
  getUsers,
  getProfile,
  createProfile,
  updateRoleRequestInfo,
  changeTypeOfUser
} = require('../controllers/user.controller')
const router = require('express').Router()

router.get('/', getUsers)
router.get('/:userId/profile', checkAuth, getProfile)
router.post('/profile', checkAuth, createProfile)
// router.post('/users', checkAuth, isAdmin, changeTypeOfUser)

exports.userRouter = router
