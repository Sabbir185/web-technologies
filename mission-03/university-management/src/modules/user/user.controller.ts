import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createStudent = async (req: Request, res: Response, next: NextFunction) => {
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


export const StudentControllers = {
    createStudent
}