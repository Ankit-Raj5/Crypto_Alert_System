"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const alertSchema = new mongoose_1.default.Schema({
    userId: { type: String},
    cryptoId: { type: String, required: true },
    priceThreshold: { type: Number, required: true },
    alertType: { type: String, enum: ['above', 'below'], required: true },
});
const Alert = mongoose_1.default.model('Alert', alertSchema);
exports.default = Alert;
