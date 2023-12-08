import {Router} from "express";
import validateRequest from "../../middlewares/validateRequest";
import {AcademicFacultyValidations} from "./academicFaculty.validation";
import {AcademicFacultyController} from "./academicFaculty.controller";

const router = Router();

router.post(
    '/create-academic-faculty',
    validateRequest(AcademicFacultyValidations.createAcademicFacultyValidation),
    AcademicFacultyController.createAcademicFaculty
);
router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);
router.patch(
    '/:facultyId',
    validateRequest(AcademicFacultyValidations.updateAcademicFacultyValidation),
    AcademicFacultyController.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;