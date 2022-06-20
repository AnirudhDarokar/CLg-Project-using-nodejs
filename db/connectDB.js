import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try{
        const Db_options = {
            dbName: "shopify"
        }
        await mongoose.connect(DATABASE_URL , Db_options);
        console.log("connected successfully....");
    }catch(e){
        console.log(e);
    }
}

export default connectDB