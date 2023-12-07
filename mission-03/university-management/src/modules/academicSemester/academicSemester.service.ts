import {TAcademicSemester} from "./academicSemester.interface";
import {AcademicSemester} from "./academicSemester.model";
import {academicSemesterNameCodeMapper} from "./academicSemester.constant";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    if(academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid Semester code")
    }
    return await AcademicSemester.create(payload);
}


export const academicSemesterServices = {
    createAcademicSemesterIntoDB
}