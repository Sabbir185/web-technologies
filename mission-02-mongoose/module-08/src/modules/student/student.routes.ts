import { Router } from 'express';
import { studentController } from './student.controller';


const userRoutes = Router();
userRoutes.get('/', studentController.getStudentList);
userRoutes.post('/create', studentController.createStudent);
userRoutes.get('/list', studentController.getAllStudents);
userRoutes.get('/single/:studentId', studentController.singleStudent);


export default userRoutes;