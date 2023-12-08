import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.mode";
import {generateStudentId} from "./utils";
import {AcademicSemester} from "../academicSemester/academicSemester.model";
import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    // create a user object
    const userData: Partial<TUser> = {};

    // if password is not given, use default password
    userData.password = password || (config.default_password as string);

    // set student role
    userData.role = 'student';

    // find academic semester info
    const admissionSemester = await AcademicSemester.findById(
        studentData?.admissionSemester
    )

    const session = await mongoose.startSession();
    session.startTransaction()
    try {
        // generate id
        userData.id = await generateStudentId(admissionSemester);

        // create a user
        const newUser = await User.create([userData], {session})
        if(!newUser.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user !');
        }

        studentData.id = newUser[0].id;
        studentData.user = newUser[0]._id; // reference _id
        // now create a student
        const newStudent = await Student.create([studentData], {session});
        if(!newStudent.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student !');
        }

        await session.commitTransaction();
        await session.endSession();

        return newStudent
    } catch (err) {
        await session.abortTransaction();
        await session.endSession();
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user !');
    }
};


export const UserServices = {
    createStudentIntoDB,
}