import express from 'express'
const router = express.Router()
import baseController from '../controllers/baseController.js'
import userController from '../controllers/userController.js'
// import checkUserAuth from '../middlewares/auth-middleware.js'

router.get('/home' , baseController.home)
router.get('/contact' , baseController.contact)
router.get('/',baseController.login)
router.post('/verify',userController.verifyLogin)
router.get('/registration',baseController.register)
router.post('/save', userController.save)
router.get('/mfashion',baseController.mfashion)
router.get('/lfashion',baseController.lfashion)
router.get('/kids', baseController.kids)
router.get('/gift',baseController.gift)
router.get('/choclate' , baseController.choclate)
router.get('/footwear', baseController.footwear)
router.get('/eldevices', baseController.devices)
router.get('/grocery', baseController.grocery)
// applying middleware for getting user data
// router.use("/loggeduser" , checkUserAuth)
// router.get("/loggeduser" , userController.loggedUserData)
router.get("/getloggeduserdata" , userController.sendLogindetails)

export default router