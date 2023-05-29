"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
exports.default = dotenv_1.default.config();
const index_1 = __importDefault(require("./routes/index"));
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, index_1.default)(app);
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});
dbConnect_1.default.on('error', console.log.bind(console, 'Erro de conexão'));
dbConnect_1.default.once('open', () => {
    console.log('conexão com banco feita com sucesso!');
});
//# sourceMappingURL=server.js.map