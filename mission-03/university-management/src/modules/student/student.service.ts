import {Student} from "./student.model"
import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import {User} from "../user/user.mode";
import {TStudent} from "./student.interface";


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
    try {
        const student = await Student.findOneAndUpdate({id}, {isDeleted: true}, {new: true, session});
        if (!student) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Student to delete student !');
        }
        const user = await User.findOneAndUpdate({id}, {isDeleted: true}, {session});
        if (!user) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Student to delete student !');
        }
        await session.commitTransaction();
        await session.endSession()
        return student;
    } catch (err) {
        await session.abortTransaction();
        await session.endSession()
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to deleted student !');
    }
}

/*
  guardian: {
    fatherOccupation:"Teacher"
  }
  guardian.fatherOccupation = Teacher
  name.firstName = 'Sabbir'
  name.lastName = 'Ahmmed'
*/
const updateStudentIntoDB = async (studentId: string, studentData: Partial<TStudent>) => {
    const {name, guardian, localGuardian, ...remainingStudentData} = studentData;

    const modifiedUpdatedData: Record<string, unknown> = {
        ...remainingStudentData
    }

    /*
      update non-primitive data
      guardian: {
        fatherOccupation:"Teacher"
      }
      guardian.fatherOccupation = Teacher
      name.firstName = 'Sabbir'
      name.lastName = 'Ahmmed'
    */

    if (name && Object.keys(name).length) {
        for (const [key, value] of Object.entries(name)) {
            modifiedUpdatedData[`name.${key}`] = value
        }
    }

    if (guardian && Object.keys(guardian).length) {
        for (const [key, value] of Object.entries(guardian)) {
            modifiedUpdatedData[`guardian.${key}`] = value
        }
    }

    if (localGuardian && Object.keys(localGuardian).length) {
        for (const [key, value] of Object.entries(localGuardian)) {
            modifiedUpdatedData[`localGuardian.${key}`] = value;
        }
    }

    const result = await Student.findOneAndUpdate(
        {id: studentId},
        modifiedUpdatedData,
        {
            new: true,
            runValidators: true
        }
    )
    return result
}


export const StudentService = {
    getSingleStudentFromDB,
    getAllStudentsFromDB,
    deleteStudentFromDB,
    updateStudentIntoDB
}