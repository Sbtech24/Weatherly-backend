"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const redis = new ioredis_1.default({
    host: "127.0.0.1",
    port: 6379,
});
redis.on("connect", () => {
    console.log("Redis connected successfully");
});
redis.on("error", () => {
    console.log("something went wrong");
});
exports.default = redis;
//# sourceMappingURL=redis.js.map