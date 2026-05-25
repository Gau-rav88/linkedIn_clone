import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("database is connected")

    }catch(error){
        console.log("db error");

    }
}
export default connectDB;
