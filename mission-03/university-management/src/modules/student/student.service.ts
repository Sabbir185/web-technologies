import { Student } from "./student.model"


const getSingleStudentFromDB = async (id: string) => {
    const result = await Student.aggregate([{ $match: { id } }]);
    return result;
}

const getAllStudentsFromDB = async () => {
    return await Student.find({});
}

const deleteStudentFromDB = async (id: string) => {
    const result = await Student.updateOne({ id }, { isDeleted: true });
    return result;
}


export const StudentService = {
    getSingleStudentFromDB,
    getAllStudentsFromDB,
    deleteStudentFromDB
}