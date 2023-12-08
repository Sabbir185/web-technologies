import {User} from "./user.mode";
import {TAcademicSemester} from "../academicSemester/academicSemester.interface";

export const findLastStudentId = async () => {
    const lastStudent = await User.findOne(
        {role: "student"},
        {id: 1, _id: 0})
        .sort({createdAt: -1})
        .lean()

    // 202301 0001
    // return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
    return lastStudent?.id ? lastStudent.id : undefined;
}

// each semester id will be regenerated from 0001
// check by semester code and year from the previous student
export const generateStudentId = async (payload: TAcademicSemester | any) => {
    let currentId = (0).toString();
    const lastStudentId = await findLastStudentId(); // 2023 01 0001

    const lastStudentSemesterCode = lastStudentId?.substring(4, 6); // 01
    const lastStudentYear = lastStudentId?.substring(0, 4); // 2023
    const currentSemesterCode = payload.code;
    const currentYear = payload.year;

    if(
        lastStudentId &&
        lastStudentSemesterCode === currentSemesterCode &&
        lastStudentYear === currentYear
    ) {
        currentId = lastStudentId.substring(6) // 0001
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;
}

// always increment the student number
export const simplePatternGenerateStudentId = async (payload: TAcademicSemester | any) => {
    const currentId = (await findLastStudentId()) || (0).toString();
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;
}

