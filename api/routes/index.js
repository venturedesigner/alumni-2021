const { authRouter } = require('./auth.router')
const { userRouter } = require('./user.router')
const { tagRouter } = require('./tag.router')

const router = require('express').Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/tag', tagRouter)

exports.router = router
