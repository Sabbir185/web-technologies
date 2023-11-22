import { Schema, model } from "mongoose";
import { Student, UserName, Guardian, LocalGuardian } from "./student/student.interface";
import validator from 'validator';

const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        maxlength: [20, "First name can not be more than 20 characters"],
        validate: function(value: string) {
            const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
            return firstNameStr === value;  // if same, then return true otherwise return false
        }
    },
    middleName: {
        type: String,
        validate: {
            validator: (value: string) => validator.isAlpha(value),
            message: "{VALUE} is must be alphabetic format"
        }
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: function(value: string) {
                const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
                return firstNameStr === value;  // if same, then return true otherwise return false
            },
            message: "{VALUE} is not a capitalize format",
        }
    },
})

const guardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required: true
    },
    fatherOccupation: {
        type: String,
        required: true,
    },
    fatherContactNo: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true
    },
    motherContactNo: {
        type: String,
    },
})

const localGuardianSchema = new Schema<LocalGuardian>({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
})

const studentSchema = new Schema<Student>({
    id: { type: String, required: [true, "ID is required"], unique: true },
    name: {
        type: userNameSchema,
        required: true
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female'],
            message: "{VALUE} is not a valid gender"
        },
        required: true
    },
    dateOfBirth: String,
    email: { 
        type: String, 
        required: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: "{VALUE} is not email formatted" 
        } 
    },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        type: guardianSchema,
        required: true,
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true
    },
    profileImg: String,
    isActive: {
        type: String,
        enum: {
            values: ['active', 'blocked'],
            message: "{VALUE} is not a valid status"
        },
        default: 'active'
    },
});

export const StudentModel = model<Student>('Student', studentSchema);
