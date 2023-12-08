import {TAcademicFaculty} from "./academicFaculty.interface";
import {AcademicFaculty} from "./academicFaculty.model";
import mongoose from "mongoose";

const createAcademicFacultyInfoDB = async (payload: TAcademicFaculty) => {
    const newFaculty = await AcademicFaculty.create(payload)
    return newFaculty;
}

const getAllAcademicFacultyFromDB = async () => {
    const faculties = await AcademicFaculty.find({})
    return faculties;
}

const getSingleAcademicFacultyFromDB = async (facultyId: string) => {
    const faculty = await AcademicFaculty.findById(facultyId)
    return faculty;
}

const updateAcademicFacultyInfoDB = async (facultyId: string, payload: TAcademicFaculty) => {
    const updatedFaculty = await AcademicFaculty.updateOne(
        {_id: new mongoose.Types.ObjectId(facultyId)},
        {$set: payload}
    )
    return updatedFaculty;
}

export const AcademicFacultyServices = {
    createAcademicFacultyInfoDB,
    getSingleAcademicFacultyFromDB,
    getAllAcademicFacultyFromDB,
    updateAcademicFacultyInfoDB
}