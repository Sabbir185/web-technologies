import { Router } from 'express';
import { getStudentList } from './student.controller';


const userRoutes = Router();
userRoutes.get('/', getStudentList);


export default userRoutes;