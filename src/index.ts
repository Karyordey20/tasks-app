import express from "express"
import dotenv from "dotenv"
// import App from "./app.js";

const app = express()
dotenv.config()

app.listen(process.env["PORT"], () => {
    console.log(`server is running on port ${process.env["PORT"] }`)
}
)




