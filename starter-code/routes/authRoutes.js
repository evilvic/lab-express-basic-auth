
const router = require('express').Router()

const{
  indexView,
  singupView,
  singupPost,
  loginView,
  loginPost,
  profileView,
  logout
}= require('../controllers/authControllers')
const { isLoggedIn }=require('../middlewares/index')
router
  .get('/', indexView)
  .get('/singup', singupView)
  .post('/singup', singupPost)
  .get('/login', loginView)
  .post('/login', loginPost)
  .get('/profile', isLoggedIn, profileView)
  .get('/logout', logout)

module.exports = router
