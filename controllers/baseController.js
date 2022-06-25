import userModel from "../models/user.js"
import bcrypt from 'bcrypt'
class baseController {
    static home = (req, res) => {
        res.render('index', { 'title': 'Home' })
    }

    static login = (req, res) => {
        res.render('Login', { 'title': 'login' })
    }

    // static verifyLogin = async(req , res)=>{
    //     try {
    //         const {email , password} = req.body
    //         const result = await userModel.findOne({email:email})
    //         console.log(result)
    //         if(result != null){
    //             const isMatch = await bcrypt.compare(password , result.password)
    //             if (result.email == email && isMatch) {
    //                  res.redirect('/')
    //             } else {
    //                 res.send("<h1>Email or Password is not valid</h1>")
    //             }
    //         }else{
    //             res.send("<h1>you are not registered user</h1>")
    //         }
    //     } catch (error) {
    //         console.log(error);            
    //     }
    // }

    static register = (req, res) => {
        res.render('register', { 'title': 'register' })
    }

    // static createUserDoc = async(req , res)=>{
    //     const hashPassword = await bcrypt.hash(req.body.password , 10)
    //     console.log(req.body);
    //     try {
    //         //Creating new document using  model
    //         const doc = new userModel({
    //             name:req.body.name,
    //             email:req.body.email,
    //             password:hashPassword
    //         })
    //         // saving document
    //          await doc.save();
    //          res.redirect('/login')
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    

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
    static mfashion = (req, res) => {
        res.render('mfashion', { 'title': 'Mfashion' })
    }

   

}

export default baseController