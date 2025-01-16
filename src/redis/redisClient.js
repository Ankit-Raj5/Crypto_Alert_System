"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedData = exports.setCachedData = void 0;
const redis_1 = __importDefault(require("../config/redis"));
const setCachedData = (key_1, data_1, ...args_1) => __awaiter(void 0, [key_1, data_1, ...args_1], void 0, function* (key, data, expiryTime = 60) {
    yield redis_1.default.set(key, JSON.stringify(data), 'EX', expiryTime); // Cache data for 60 seconds
});
exports.setCachedData = setCachedData;
const getCachedData = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield redis_1.default.get(key);
    return data ? JSON.parse(data) : null;
});
exports.getCachedData = getCachedData;
