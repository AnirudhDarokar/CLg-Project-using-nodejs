import dotenv from 'dotenv'
dotenv.config()
import userModel from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { storeToken } from '../Public/js/localStorageToken.js'


   class userController{

    static loggedUserData = [];

    static getLoggedUserData = (result)=>{
        this.loggedUserData.push(result);
        // console.log(this.loggedUserData);
        return this.loggedUserData

    }

     static sendLogindetails = (req , res)=>{
        res.send(this.loggedUserData[0]);
     }
    static save = async(req , res)=>{
        
        console.log("posted user" + JSON.stringify(req.body));
        const hashPassword = await bcrypt.hash(req.body.password , 10);
        // create a customer
        const {email} = req.body;
        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
    
        })
    console.log("trying to save in db...........");
        // save a customer in mongoDB
        //  await user.save().then(data=>{res.send(data)}).catch(e=>{res.send({message : e.message})})
        await user.save();
        console.log("saved doc");
        const registeredUser = await userModel.findOne({email : email})
         console.log("registered succesfully" + registeredUser);

        const token = jwt.sign({userID : registeredUser._id},process.env.SECRET , {expiresIn : '5d'})
       console.log(token);
        // storeToken(token)
       res.send({"token" : token});
    //     res.send(token)
    //     console.log("res sended success");
        // .then(data=>{
        //     res.send(data);
        // }).catch(e=>{res.status(500).send({message:err.message})})
    
    }

    static verifyLogin = async(req , res)=>{
        
        var verifyObj = {};
        console.log("posted data for login verification : " + JSON.stringify(req.body));
        const {email , password} = req.body
        // verifying customer
        const result = await userModel.findOne({email:email});
        console.log("loggeddddddddddddddddddddddddddddddddddddd");
       this.getLoggedUserData(result);
        console.log(result);
        if (result!=null) {
            const isPasswordMatch = await bcrypt.compare(password , result.password);
            const isEmailMatch = email == result.email ? true : false;
            const token = jwt.sign({userID : result._id},process.env.SECRET , {expiresIn : '5d'})
            // storeToken(token)
           verifyObj["email"] = isEmailMatch;
           verifyObj["password"] = isPasswordMatch;
           verifyObj["token"] = token;
           res.send(verifyObj);
           console.log("login succesfully");
        }
        else{
            console.log("result is empty");
        }
    }

    // static loggedUserData = (req , res)=>{
    //     console.log(req.user);
    //     res.send({"user" : req.user})
    // }

   }
    

export default userController