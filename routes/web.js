import express from 'express'
const router = express.Router()
import baseController from '../controllers/baseController.js'

router.get('/' , baseController.home)
router.get('/contact' , baseController.contact)
router.get('/login',baseController.login)
router.post('/login',baseController.verifyLogin)
router.get('/registration',baseController.register)
router.post('/registration',baseController.createUserDoc)
router.get('/mfashion',baseController.mfashion)
router.get('/lfashion',baseController.lfashion)
router.get('/kids', baseController.kids)
router.get('/gift',baseController.gift)
router.get('/choclate' , baseController.choclate)
router.get('/footwear', baseController.footwear)
router.get('/eldevices', baseController.devices)
router.get('/grocery', baseController.grocery)

export default router