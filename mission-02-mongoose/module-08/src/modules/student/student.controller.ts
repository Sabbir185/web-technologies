import {StudentServices} from './student.service'
import { Request, Response } from "express";


const getStudentList = async (req: Request, res: Response) => {
    res.send("OK")
}


const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        const result = await StudentServices.createStudentIntoDB(studentData);
        return res.status(200).json({
            error: false,
            msg: 'Student is created successfully',
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
}

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentFromDB();
        return res.status(200).json({
            error: false,
            msg: 'Success',
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
}


const singleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.getSingleStudentFromDB(studentId);
        return res.status(200).json({
            error: false,
            msg: 'Success',
            data: result,
        });

    } catch (error) {
        console.log(error)
    }
}


export const studentController = {
    getStudentList,
    createStudent,
    getAllStudents,
    singleStudent,
}