import {Student} from "./student.model"


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
    const result = await Student.updateOne({id}, {isDeleted: true});
    return result;
}


export const StudentService = {
    getSingleStudentFromDB,
    getAllStudentsFromDB,
    deleteStudentFromDB
}