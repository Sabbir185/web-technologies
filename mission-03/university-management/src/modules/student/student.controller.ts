import { RequestHandler } from "express"
import { StudentService } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";


const getSingleStudent = catchAsync(async (req, res) => {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Student is retrieved successfully",
        data: result
    })
})

const getAllStudents = catchAsync(async (req, res) => {
    const result = await StudentService.getAllStudentsFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Student are retrieved successfully",
        data: result,
    })
})

const deleteStudent: RequestHandler = async (req, res, next) => {
    try {
        const { studentId } = req.params;
        const result = await StudentService.deleteStudentFromDB(studentId);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student is deleted successfully",
            data: result,
        })
    } catch (error) {
        next(error)
    }
}


export const studentController = {
    getSingleStudent,
    getAllStudents,
    deleteStudent
}