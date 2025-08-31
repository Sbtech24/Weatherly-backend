import { NextFunction, Request, Response } from "express";
import { getWeatherService } from "../services/weather.service";

export const getWeather = async (req:Request,res:Response,next:NextFunction)=>{
    // service function 

    try{
         const {city} = req.params
     const data =  await getWeatherService(city)
    res.status(200).json({data})


    }catch(error){
        res.status(404).json({message:"something went wrong"})
        next()
    }
   
}