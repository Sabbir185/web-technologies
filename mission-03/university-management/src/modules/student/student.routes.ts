import express from "express";
import { studentController } from './student.controller';

const router = express.Router();

router.get('/:studentId', studentController.getSingleStudent);
router.get('/', studentController.getAllStudents);
router.delete('/:studentId', studentController.deleteStudent);

export const StudentRoutes = router;


