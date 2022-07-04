import mongoose from "mongoose";

//Definig schema

const dataSchema = new mongoose.Schema({
title:{type:String, required:true , trim:true},
type :{type:String , required:true},
url:{type:String , required:true},
amount:{type:Number , required:true},
details : {type:String , required:true}

})

const dataModel = mongoose.model('data', dataSchema)

export default dataModel