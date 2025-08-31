import express from "express"
import weatherRoute from "./routes/weather.routes";
import dotenv from "dotenv"
import { getWeatherService  } from "./services/weather.service";


dotenv.config({path:"src/config/.env"})
const app = express()





app.use("/api/weather",weatherRoute)

// getWeatherService()


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})