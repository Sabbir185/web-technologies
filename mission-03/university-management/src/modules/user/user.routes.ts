import express from "express";
import { StudentControllers } from "./user.controller";

const router = express.Router();

router.post("/create-student", StudentControllers.createStudent);

export const UserRouter = router;