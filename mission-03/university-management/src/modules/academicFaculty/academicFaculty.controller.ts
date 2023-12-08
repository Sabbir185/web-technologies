import {catchAsync} from "../../utils/catchAsync";
import {AcademicFacultyServices} from "./academicFaculty.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.createAcademicFacultyInfoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "New academic faculty is created successfully",
        data: result
    })
})

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(req.params.facultyId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculty is retrieved successfully",
        data: result
    })
})

const getAllAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculties are retrieved successfully",
        data: result
    })
})

const updateAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.updateAcademicFacultyInfoDB(req.params.facultyId, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculty updated successfully",
        data: result
    })
})

export const AcademicFacultyController = {
    createAcademicFaculty,
    getSingleAcademicFaculty,
    getAllAcademicFaculty,
    updateAcademicFaculty
}