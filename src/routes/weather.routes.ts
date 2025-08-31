import { Router } from "express";
import { getWeather } from "../controller/weather.controller";

const router = Router()

router.post("/:city",getWeather)


export default router 