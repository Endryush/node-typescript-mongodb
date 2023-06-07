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
const User_1 = __importDefault(require("../models/User"));
class UserController {
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find().exec();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({ error: "An error occurred, please try again in a few minutes" });
            }
        });
    }
    static registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new User_1.default(req.body);
                yield user.save();
                res.status(201).send(user.toJSON());
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield User_1.default.findById(id).exec();
                if (!user) {
                    res.status(404).send({ message: "Usuário não encontrado" });
                    return;
                }
                res.status(200).send(user);
            }
            catch (error) {
                res.status(400).send({ message: error });
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const userUpdated = yield User_1.default.findByIdAndUpdate(id, { $set: req.body }, { new: true }).exec();
                if (!userUpdated) {
                    res.status(404).send({ message: 'Usuário não encontrado' + id });
                    return;
                }
                res.status(200).send({ message: 'Livro atualizado com sucesso' });
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map