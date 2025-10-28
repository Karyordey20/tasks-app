import mongoose from "mongoose"

mongoose.set("strictQuery",true)

export const connectDB = async (DATABASE_URL:string) =>
    {
    try{
        await mongoose.connect(DATABASE_URL)
        .then(() =>{
            console.log("Database connected successfully")
        })
    }catch(error){
        console.log("Error while connecting to database", error)
    } }
