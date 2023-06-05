"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(`mongodb+srv://LearningTypescript:${process.env.DB_AUTH}@cadastro.rpy47th.mongodb.net/maindb`);
const db = mongoose_1.default.connection;
exports.default = db;
//# sourceMappingURL=dbConnect.js.map