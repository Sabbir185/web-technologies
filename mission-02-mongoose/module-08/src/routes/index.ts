import { Router } from "express";
import userRoutes from "../modules/student/student.routes";


const apiRouters = Router();
apiRouters.use('/student', userRoutes);


export default apiRouters;