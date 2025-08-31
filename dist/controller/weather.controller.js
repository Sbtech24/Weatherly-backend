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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
const weather_service_1 = require("../services/weather.service");
const getWeather = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // service function 
    try {
        const { city } = req.params;
        const data = yield (0, weather_service_1.getWeatherService)(city);
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(404).json({ message: "something went wrong" });
        next();
    }
});
exports.getWeather = getWeather;
//# sourceMappingURL=weather.controller.js.map