import userModel from "../models/user.js"
import dataModel from "../models/datamodel.js"
import bcrypt from 'bcrypt'
class baseController {
    static home = (req, res) => {
        res.render('index', { 'title': 'Home' })
    }

    static login = (req, res) => {
        res.render('Login', { 'title': 'login' })
    }

    static register = (req, res) => {
        res.render('register', { 'title': 'register' })
    }
    
    static contact = (req, res) => {
        res.render('contact', { 'title': 'Contact' })
    }

    static choclate = (req, res) => {
        res.render('choclate', { 'title': 'Buy Choclate' })
    }
    static devices = (req, res) => {
        res.render('Devices', { 'title': 'Buy Devices' })
    }
    static footwear = (req, res) => {
        res.render('footwear', { 'title': 'Buy Footwear' })
    }

    static gift = (req, res) => {
        res.render('Gift', { 'title': 'Buy Gift' })
    }
    static grocery = (req, res) => {
        res.render('Grocery', { 'title': 'Buy Grocery' })
    }
    static kids = (req, res) => {
        res.render('kids', { 'title': 'Buy for kids' })
    }

    static lfashion = (req, res) => {
        res.render('lfashion', { 'title': 'Lfashion' })
    }
    static mfashion = async(req, res) => {
        dataModel.find({},function(error , items){
            res.render('mfashion', { 'title':'Mashion',
                itemlist : items
            })
        })
        
    }

    static data = (req , res)=>{
        res.render('data' ,{'title':'Data'} )
    }

   

}

export default baseController