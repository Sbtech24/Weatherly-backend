"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherService = void 0;
const redis_1 = __importDefault(require("../config/redis"));
const axios_1 = __importDefault(require("axios"));
const getWeatherService = (city) => __awaiter(void 0, void 0, void 0, function* () {
    // Check cache data 
    const cacheKey = `weather:${city}`;
    const cacheData = yield redis_1.default.get(cacheKey);
    try {
        const res = yield axios_1.default.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.WEATHER_API_KEY}`);
        const data = res.data;
        // save to redis 
        yield redis_1.default.setex(cacheKey, 3600, JSON.stringify(data));
        return data;
    }
    catch (error) {
        console.error("Weather API error:", error.message);
        throw new Error("Failed to fetch weather data");
    }
});
exports.getWeatherService = getWeatherService;
//# sourceMappingURL=weather.service.js.map