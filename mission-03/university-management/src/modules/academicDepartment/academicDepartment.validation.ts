import {z} from "zod";

const createAcademicDepartmentValidation = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Academic Department must be string",
            required_error: "Academic Department name is required"
        }),
        academicFaculty: z.string({
            invalid_type_error: "Academic faculty must be string",
            required_error: "Academic faculty is required"
        })
    })
})

const updateAcademicDepartmentValidation = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Academic Department must be string",
        }).optional(),
        academicFaculty: z.string({
            invalid_type_error: "Academic faculty must be string",
        }).optional()
    })
})

export const AcademicDepartmentValidations = {
    createAcademicDepartmentValidation,
    updateAcademicDepartmentValidation
}