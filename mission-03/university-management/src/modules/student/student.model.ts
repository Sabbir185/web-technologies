import { Schema, model } from "mongoose";
import { TLocalGuardian, TStudent, TUserGuardian, TUserName } from "./student.interface";


const userNameSchema = new Schema<TUserName>({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        trim: true,
        maxlength: [20, "First Name can not be more than 20 characters"]
    },
    middleName: {
        type: String,
        trim: true,
        maxlength: [20, "Middle Name can not be more than 20 characters"]
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last Name is required"],
        maxlength: [20, "Last Name can not be more than 20 characters"]
    },
})

const userGuardianSchema = new Schema<TUserGuardian>({
    fatherName: {
        type: String,
        trim: true,
        required: [true, 'Father Name is required'],
    },
    fatherOccupation: {
        type: String,
        trim: true,
        required: [true, 'Father occupation is required'],
    },
    fatherContactNo: {
        type: String,
        required: [true, 'Father contact No is required'],
    },
    motherName: {
        type: String,
        trim: true,
        required: [true, 'Mother Name is required'],
    },
    motherOccupation: {
        type: String,
        trim: true,
        required: [true, 'Mother Name is required'],
    },
    motherContactNo: {
        type: String,
        required: [true, 'Mother Contact No is required'],
    }
})

const userLocalGuardianSchema = new Schema<TLocalGuardian>({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    occupation: {
        type: String,
        required: [true, 'Occupation is required'],
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    }
})


const studentSchema = new Schema<TStudent>({
    id: {
        type: String,
        required: [true, 'ID is required'],
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User id is required'],
        unique: true,
        ref: "user"
    },
    name: {
        type: userNameSchema,
        required: [true, 'Name is required']
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: `{VALUE} is not a valid gender`
        },
        required: true,
    },
    dateOfBirth: {type: String},
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    contactNo: {
        type: String,
        required: [true, "Contact number is required"]
    },
    emergencyContactNo: {
        type: String,
        required: [true, "Emergency Contact number is required"]
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: `{VALUE} is not a valid blood group`
        },
        required: true,
    },
    presentAddress: {
        type: String,
        required: [true, "Present address is required"]
    },
    permanentAddress: {
        type: String,
        required: [true, "Permanent is required"]
    },
    guardian: {
        type: userGuardianSchema,
        required: [true, "Guardian information is required"]
    },
    localGuardian: {
        type: userLocalGuardianSchema,
        required: [true, "Local guardian information is required"]
    },
    profileImg: { type: String },
    isDeleted: {
        type: Boolean,
        default: true
    },

},
{
    toJSON: {virtuals: true},
    timestamps: true,
});


// virtual -> it drivers from existence data field
// We just modify data in json response time
studentSchema.virtual('fullName').get(function(){
    return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`
}) 



export const Student = model<TStudent>("Student", studentSchema)