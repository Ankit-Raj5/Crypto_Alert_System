"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAlerts = exports.addAlert = void 0;
const alertRepository_1 = require("../repository/alertRepository");
const redisClient_1 = __importDefault(require("../config/redisClient"));
const addAlert = async (alert) => {
    const newAlert = await (0, alertRepository_1.createAlert)(alert);
    await redisClient_1.default.set(`alert:${newAlert.id}`, JSON.stringify(newAlert));
    return newAlert;
};
exports.addAlert = addAlert;
const fetchAlerts = async () => {
    const cachedAlerts = await redisClient_1.default.get("alerts");
    if (cachedAlerts) {
        return JSON.parse(cachedAlerts);
    }
    const alerts = await (0, alertRepository_1.getAlerts)();
    await redisClient_1.default.set("alerts", JSON.stringify(alerts));
    return alerts;
};
exports.fetchAlerts = fetchAlerts;
