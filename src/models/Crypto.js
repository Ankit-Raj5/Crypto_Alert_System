"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cryptoSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
});
const Crypto = mongoose_1.default.model('Crypto', cryptoSchema);
exports.default = Crypto;
