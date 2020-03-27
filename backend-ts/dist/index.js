"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(routes_1.default);
app.listen(3333);
// ao inves do nodemon
// Babel ou Sucrase / TS-node Dev
// @ decoreators usado no TypeORM
