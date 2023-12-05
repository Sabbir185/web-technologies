import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.routes";
import { UserRouter } from "../modules/user/user.routes";

const router = Router();

const moduleRoutes = [
    {
        path: '/students',
        route: StudentRoutes
    },
    {
        path: 'users',
        route: UserRouter
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;