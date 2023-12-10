import {Student} from "./student.model"
import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import {User} from "../user/user.mode";
import {TStudent} from "./student.interface";
import {studentSearchableFields} from "./student.constant";
import QueryBuilder from "../../builder/QueryBuilder";

/*
*
*   Row level query, filtering, pagination, fields filtering etc
*
* */
const getAllStudentsFromDB_ByRowCoding = async (query: Record<string, unknown>) => {
    const queryObj = {...query};

    let searchTerm = '';
    if (query?.searchTerm) {
        searchTerm = query?.searchTerm as string;
    }

    // for partial match
    // { email: { $regex: query.searchTerm, $options: 'i' }}
    // {"name.firstName": {$regex: query.searchTerm, $options: 'i'}}

    // Dynamic doing it by loop
    const searchQuery = Student.find({
        $or: studentSearchableFields?.map((field) => ({
            [field]: {$regex: searchTerm, $options: 'i'},
        }))
    });

    // Filtering functionality
    const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
    excludeFields.forEach((el) => delete query[el]);

    const filterQuery = searchQuery
        .find(queryObj)
        .populate('admissionSemester')
        .populate({
            path: 'academicDepartment',
            populate: {
                path: 'academicFaculty'
            }
        })

    // Sorting Functionality
    let sort = '-createdAt';
    if (query?.sort) {
        sort = query?.sort as string;
    }

    const sortQuery = filterQuery.sort(sort);

    // pagination functionality
    let page = 1;
    let limit = 1;
    let skip = 0;
    if (query?.limit) {
        page = Number(query?.limt);
    }
    if (query?.page) {
        page = Number(query?.page);
        skip = (page - 1) * limit;
    }

    const paginateQuery = sortQuery.skip(skip);
    const limitQuery = paginateQuery.limit(limit);

    // Fields limiting functionality
    let fields = '-__v';
    if (query?.fields) {
        fields = (query.fields as string).split(',').join(' ');
    }

    const fieldQuery = await limitQuery.select(fields);
    return fieldQuery;
}

// using QueryBuilder
const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
    const studentQuery = new QueryBuilder(
        Student.find()
            .populate('admissionSemester')
            .populate({
                path: 'academicDepartment',
                populate: {
                    path: 'academicFaculty'
                }
            }),
        query
    )
        .search(studentSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields()

    const result = await studentQuery.modelQuery;
    return result
}

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
    updateStudentIntoDB,
    getAllStudentsFromDB_ByRowCoding
}