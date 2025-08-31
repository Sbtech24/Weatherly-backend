import redis from "../config/redis";
import axios from "axios";

export const getWeatherService = async (city: string | undefined) => {

    // Check cache data 
    const cacheKey = `weather:${city}`
    const cacheData  = await redis.get(cacheKey)

     if (cacheData) {
    console.log("⚡ Serving from Redis Cache");
    return JSON.parse(cacheData);
  }
  
  try {
    const res = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.WEATHER_API_KEY}`
    );

    const data = res.data

    // save to redis 
    await redis.setex(cacheKey,3600,JSON.stringify(data))


    return data;
  } catch (error: any) {
    console.error("Weather API error:", error.message);
    throw new Error("Failed to fetch weather data");
  }
};
