import express from "express";
import {studentController} from './student.controller';
import validateRequest from "../../middlewares/validateRequest";
import {updateStudentValidationSchema} from "./student.validation";

const router = express.Router();

router.patch(
    '/:studentId',
    validateRequest(updateStudentValidationSchema),
    studentController.updateStudent
);
router.get('/:studentId', studentController.getSingleStudent);
router.get('/', studentController.getAllStudents);
router.delete('/:studentId', studentController.deleteStudent);

export const StudentRoutes = router;