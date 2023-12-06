import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.routes";
import { UserRouter } from "../modules/user/user.routes";
import { AcademicSemesterRouter } from "../modules/academicSemester/academicSemester.routes";

const router = Router();

const moduleRoutes = [
    {
        path: '/students',
        route: StudentRoutes
    },
    {
        path: '/users',
        route: UserRouter
    },
    {
        path: '/academic-semesters',
        route: AcademicSemesterRouter
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;