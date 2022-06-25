import userModel from "../models/user.js"
import bcrypt from 'bcrypt'


   class userController{

    static save = async(req , res)=>{
        console.log("posted user" + JSON.stringify(req.body));
        const hashPassword = await bcrypt.hash(req.body.password , 10);
        // create a customer
        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
    
        })
    console.log("trying to save in db...........");
        // save a customer in mongoDB
         await user.save().then(data=>{res.send(data)}).catch(e=>{res.send({message : e.message})})
         console.log("registered succesfully");
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
        console.log(result);
        if (result!=null) {
            const isPasswordMatch = await bcrypt.compare(password , result.password);
            const isEmailMatch = email == result.email ? true : false;
           verifyObj["email"] = isEmailMatch;
           verifyObj["password"] = isPasswordMatch;
           res.send(verifyObj);
           console.log("reistered succesfully");
        }
        else{
            console.log("result is empty");
        }
    }
   }
    

export default userController