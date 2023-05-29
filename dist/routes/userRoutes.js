"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
const router = express_1.default.Router();
router
    .get('/users', userController_1.default.getAllUsers)
    .post('/users', userController_1.default.registerUser)
    .get('/user/:id', userController_1.default.getUserById)
    .put('/user/:id', userController_1.default.updateUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map