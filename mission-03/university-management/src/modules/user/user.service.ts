import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.mode";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    // create a user object
    const userData: Partial<TUser> = {};

    // if password is not given, use default password
    userData.password = password || (config.default_password as string);

    // set student role
    userData.role = 'student';

    // generate id
    userData.id = "123456";

    // create a user
    const newUser = await User.create(userData)

    // now create a student
    if(Object.keys(newUser).length) {
        studentData.id = newUser.id;
        studentData.user = newUser._id; // reference _id

        const newStudent = await Student.create(studentData);
        return newStudent
    }
};


export const UserServices = {
    createStudentIntoDB,
}