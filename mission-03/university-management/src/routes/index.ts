import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.routes";

const router = Router();

const moduleRoutes = [
    {
        path: '/students',
        route: StudentRoutes
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;