import {RequestHandler} from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import {academicSemesterServices} from "./academicSemester.service";
import {catchAsync} from "../../utils/catchAsync";


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

const getSingleAcademicSemester = catchAsync(async (req, res) => {
    const result = await academicSemesterServices.getSingleAcademicSemesterFromDB(req.params.academicId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester retrieved successfully',
        data: result
    })
})

const getAllAcademicSemester = catchAsync(async (req, res) => {
    const result = await academicSemesterServices.getAllAcademicSemesterFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All academic semester retrieved successfully',
        data: result
    })
})

const updateAcademicSemester = catchAsync(async (req, res) => {
    const result = await academicSemesterServices.updateAcademicSemesterIntoDB(req.params.academicId, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester updated successfully',
        data: result
    })
})

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getSingleAcademicSemester,
    getAllAcademicSemester,
    updateAcademicSemester
}