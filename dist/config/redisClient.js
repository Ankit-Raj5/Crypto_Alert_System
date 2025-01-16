"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = void 0;
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    url: "redis://localhost:6379",
});
redisClient.on("error", (err) => console.error("Redis Client Error", err));
const connectRedis = async () => {
    await redisClient.connect();
    console.log("Redis connected successfully.");
};
exports.connectRedis = connectRedis;
exports.default = redisClient;
