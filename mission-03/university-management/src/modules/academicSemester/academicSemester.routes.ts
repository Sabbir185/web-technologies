import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import { AcademicSemesterValidations } from "./academicSemester.validation";

const router = express.Router();

router.post(
    "/create-academic-semester",
    validateRequest(AcademicSemesterValidations.createAcademicSemesterValidationSchema),
    AcademicSemesterControllers.createAcademicSemester
);
router.get('/', )
router.get('/:academicId', )
router.patch('/:academicId', )

export const AcademicSemesterRouter = router;