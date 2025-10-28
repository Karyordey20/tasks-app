import dotenv from "dotenv"
dotenv.config()

import express from "express"
import type { Request,Response} from "express"  
import { connectDB } from "./config.js"

const app = express()

// Connect to database
connectDB(process.env["DATABASE_URL"] as string)
.then(() => {
    // Only start server after DB connection is established
    app.listen(process.env["PORT"], () => {
        console.log(`Server is running on port ${process.env["PORT"]}`)
    })
}).catch(error => {
    console.error("Failed to start server:", error)
    process.exit(1)
})
// Middleware to parse JSON request bodies
app.use(express.json())

app.use("/v1/health", (_req:Request, res:Response) =>{
    res.status(200).json(
        {status:"OK",
        message:"Server is running successfully",
        timeStamp:new Date().toISOString(),
        uptime:process.uptime()
}
)})