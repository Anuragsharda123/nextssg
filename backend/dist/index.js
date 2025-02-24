"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', routers_1.default);
db_1.default.sync().then(() => {
    console.log('Database connected');
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
}).catch((err) => {
    console.log(err);
});
