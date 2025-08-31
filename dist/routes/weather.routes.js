"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weather_controller_1 = require("../controller/weather.controller");
const router = (0, express_1.Router)();
router.post("/:city", weather_controller_1.getWeather);
exports.default = router;
//# sourceMappingURL=weather.routes.js.map