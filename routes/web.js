import express from 'express'
const router = express.Router()

import contactController from '../controllers/contactController.js'
import homeController from '../controllers/homeController.js'
import mfashionController from '../controllers/mfashionController.js'
import lfashionController from '../controllers/lfashionController.js'
import kidsController from '../controllers/kidsController.js'
import giftController from '../controllers/giftController.js'
import choclateController from '../controllers/choclateController.js'
import footwearController from '../controllers/footwearController.js'
import eldController from '../controllers/eldController.js'
import groceryController from '../controllers/groceryController.js'
import loginController from '../controllers/loginController.js'


router.get('/' , homeController)
router.get('/contact' , contactController)
router.get('/login',loginController)
router.get('/mfashion',mfashionController)
router.get('/lfashion',lfashionController)
router.get('/kids', kidsController)
router.get('/gift',giftController)
router.get('/choclate' , choclateController)
router.get('/footwear', footwearController)
router.get('/eldevices', eldController)
router.get('/grocery', groceryController)

export default router