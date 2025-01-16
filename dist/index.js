"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db"));
const redisClient_1 = require("./config/redisClient");
const alertRoutes_1 = __importDefault(require("./routes/alertRoutes"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use("/api", alertRoutes_1.default);
// Error Handler
app.use(errorHandler_1.errorHandler);
// Start the server
const startServer = async () => {
    await (0, db_1.default)();
    await (0, redisClient_1.connectRedis)();
    app.listen(5000, () => {
        console.log("Server running on http://localhost:5000");
    });
};
startServer();
