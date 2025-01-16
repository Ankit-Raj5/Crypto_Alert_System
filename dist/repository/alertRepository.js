"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlerts = exports.createAlert = void 0;
const alertModel_1 = __importDefault(require("../models/alertModel"));
const createAlert = async (alert) => {
    return await alertModel_1.default.create(alert);
};
exports.createAlert = createAlert;
const getAlerts = async () => {
    return await alertModel_1.default.find();
};
exports.getAlerts = getAlerts;
