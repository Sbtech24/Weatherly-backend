"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_routes_1 = __importDefault(require("./routes/weather.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "src/config/.env" });
const app = (0, express_1.default)();
app.use("/api/weather", weather_routes_1.default);
// getWeatherService()
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map