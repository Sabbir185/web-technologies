import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { UserServices } from "../user/user.service";


const createAcademicSemester: RequestHandler = async (req, res, next) => {
    try {
        const { password, student: studentData } = req.body;
        const newStudent = await UserServices.createStudentIntoDB(password, studentData)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student is created successfully',
            data: newStudent
        })
    } catch (error) {
        next(error)
    }
}


export const AcademicSemesterControllers = {
    createAcademicSemester
}