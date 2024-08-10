import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.MONGO_URI

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection Successful to database")
    } catch (error) {
        console.log("Connection Failed to database", error)
    }
}

export default connectDb