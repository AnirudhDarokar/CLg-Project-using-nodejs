import mongoose from "mongoose";

//Definig Schema
 
const userSchema = new mongoose.Schema({
    name:{type:String , required:true , trim:true},
    email:{type:String , required:true, trim:true , unique:true},
    password:{type:String , required:true , trim:true},
    join:{type:Date , default:Date.now}
})

//compiling Schema
const userModel = mongoose.model('user', userSchema)

export default userModel