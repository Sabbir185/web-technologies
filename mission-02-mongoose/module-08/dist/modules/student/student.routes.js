"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_controller_1 = require("./student.controller");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/', student_controller_1.getStudentList);
exports.default = userRoutes;
