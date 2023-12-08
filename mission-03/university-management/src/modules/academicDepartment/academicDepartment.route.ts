import {Router} from "express";
import validateRequest from "../../middlewares/validateRequest";
import {AcademicDepartmentValidations} from "./academicDepartment.validation";
import {AcademicDepartmentController} from "./academicDepartment.controller";

const router = Router();

router.post(
    '/create-academic-department',
    validateRequest(AcademicDepartmentValidations.createAcademicDepartmentValidation),
    AcademicDepartmentController.createAcademicDepartment
);
router.get('/', AcademicDepartmentController.getAllAcademicDepartment);
router.get('/:departmentId', AcademicDepartmentController.getSingleAcademicDepartment);
router.patch(
    '/:departmentId',
    validateRequest(AcademicDepartmentValidations.updateAcademicDepartmentValidation),
    AcademicDepartmentController.updateAcademicDepartment
);

export const AcademicDepartmentRoutes = router;