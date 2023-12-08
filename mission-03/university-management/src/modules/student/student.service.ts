import {Student} from "./student.model"
import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import {User} from "../user/user.mode";


const getSingleStudentFromDB = async (id: string) => {
    const result = await Student.aggregate([
        {$match: {id}},
        {
            $lookup: {
                from: 'academicsemesters',
                localField: 'admissionSemester',
                foreignField: '_id',
                as: 'admissionSemester'
            }
        },
        {$unwind: '$admissionSemester'},
        {
            $lookup: {
                from: 'academicdepartments',
                localField: 'academicDepartment',
                foreignField: '_id',
                pipeline: [
                    {
                        $lookup: {
                            from: 'academicfaculties',
                            localField: 'academicFaculty',
                            foreignField: '_id',
                            as: 'academicFaculty'
                        }
                    },
                    {$unwind: '$academicFaculty'},
                ],
                as: 'academicDepartment'
            }
        },
        {$unwind: '$academicDepartment'},
    ]);
    return result;
}

const getAllStudentsFromDB = async () => {
    const students = await Student.find({})
        .populate('admissionSemester')
        .populate({
            path: 'academicDepartment',
            populate: {
                path: 'academicFaculty'
            }
        })
    return students;
}

const deleteStudentFromDB = async (id: string) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try{
        const student = await Student.findOneAndUpdate({id}, {isDeleted: true}, {new: true, session});
        if(!student) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Student to delete student !');
        }
        const user = await User.findOneAndUpdate({id}, {isDeleted: true}, {session});
        if(!user) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Student to delete student !');
        }
        await session.commitTransaction();
        await session.endSession()
        return student;
    } catch (err) {
        await session.abortTransaction();
        await session.endSession()
    }
}


export const StudentService = {
    getSingleStudentFromDB,
    getAllStudentsFromDB,
    deleteStudentFromDB
}