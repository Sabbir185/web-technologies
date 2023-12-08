
import mongoose from "mongoose";
import {TAcademicDepartment} from "./academicDepartment.interface";
import {AcademicDepartment} from "./academicDepartment.model";

const createAcademicDepartmentInfoDB = async (payload: TAcademicDepartment) => {
    const newDepartment = await AcademicDepartment.create(payload)
    return newDepartment;
}

const getAllAcademicDepartmentFromDB = async () => {
    const faculties = await AcademicDepartment.find({})
    return faculties;
}

const getSingleAcademicDepartmentFromDB = async (departmentId: string) => {
    const faculty = await AcademicDepartment.findById(departmentId);
    if(!faculty) {
        throw new Error("Department not found !")
    }
    return faculty;
}

const updateAcademicDepartmentInfoDB = async (departmentId: string, payload: TAcademicDepartment) => {
    const updatedDepartment= await AcademicDepartment.updateOne(
        {_id: new mongoose.Types.ObjectId(departmentId)},
        {$set: payload},
        {new: true}
    )
    return updatedDepartment;
}

export const AcademicDepartmentServices = {
    createAcademicDepartmentInfoDB,
    getSingleAcademicDepartmentFromDB,
    getAllAcademicDepartmentFromDB,
    updateAcademicDepartmentInfoDB
}