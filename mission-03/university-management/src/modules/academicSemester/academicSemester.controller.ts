import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import {academicSemesterServices} from "./academicSemester.service";


const createAcademicSemester: RequestHandler = async (req, res, next) => {
    try {
        const result = await academicSemesterServices.createAcademicSemesterIntoDB(req.body);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student is created successfully',
            data: result
        })
    } catch (error) {
        next(error)
    }
}


export const AcademicSemesterControllers = {
    createAcademicSemester
}