"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const cryptoRoutes_1 = __importDefault(require("./routes/cryptoRoutes"));
const alertRoutes_1 = __importDefault(require("./routes/alertRoutes"));
const socketServer_1 = __importDefault(require("./sockets/socketServer"));
const http_1 = __importDefault(require("http"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// Set up WebSocket server
const io = (0, socketServer_1.default)(server);
// Connect to MongoDB
(0, db_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api/crypto', cryptoRoutes_1.default);
app.use('/api/alerts', alertRoutes_1.default);
server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
