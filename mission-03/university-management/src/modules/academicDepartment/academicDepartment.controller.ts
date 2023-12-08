import {catchAsync} from "../../utils/catchAsync";
import {AcademicDepartmentServices} from "./academicDepartment.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.createAcademicDepartmentInfoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "New academic faculty is created successfully",
        data: result
    })
})

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(req.params.departmentId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculty is retrieved successfully",
        data: result
    })
})

const getAllAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculties are retrieved successfully",
        data: result
    })
})

const updateAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.updateAcademicDepartmentInfoDB(req.params.departmentId, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculty updated successfully",
        data: result
    })
})

export const AcademicDepartmentController = {
    createAcademicDepartment,
    updateAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment
}