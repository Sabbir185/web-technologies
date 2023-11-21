import { Router } from "express";
import userRoutes from "../modules/student/student.routes";


const apiRouters = Router();
apiRouters.use('/user', userRoutes);


export default apiRouters;