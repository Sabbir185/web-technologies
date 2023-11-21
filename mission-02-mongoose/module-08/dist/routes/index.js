"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_routes_1 = __importDefault(require("../modules/student/student.routes"));
const apiRouters = (0, express_1.Router)();
apiRouters.use('/user', student_routes_1.default);
exports.default = apiRouters;
