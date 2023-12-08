import {TAcademicSemester} from "./academicSemester.interface";
import {AcademicSemester} from "./academicSemester.model";
import {academicSemesterNameCodeMapper} from "./academicSemester.constant";
import mongoose from "mongoose";
import AppError from "../../errors/AppError";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    if(academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new AppError(400, "Invalid Semester code")
    }
    return await AcademicSemester.create(payload);
}

const getSingleAcademicSemesterFromDB = async (_id: string) => {
    const academicSemester = await AcademicSemester.findById(_id)
    return academicSemester;
}

const getAllAcademicSemesterFromDB = async () => {
    const academicSemesters = await AcademicSemester.find({})
    return academicSemesters;
}

const updateAcademicSemesterIntoDB = async (_id: string, payload: TAcademicSemester) => {
    const updatedAcademicSemester = await AcademicSemester.updateOne(
        {_id: new mongoose.Types.ObjectId(_id)},
        {$set: payload}
    )
    return updatedAcademicSemester;
}

export const academicSemesterServices = {
    createAcademicSemesterIntoDB,
    getSingleAcademicSemesterFromDB,
    getAllAcademicSemesterFromDB,
    updateAcademicSemesterIntoDB
}