import z from 'zod'

const userValidationSchema = z.object({
    // they are option or created by default from model
    // id: z.string(),
    // needsPasswordChange: z.boolean().optional().default(true),
    // role: z.enum(["student", "faculty", "admin"]),
    // status: z.enum(["in-progress", "blocked"]).default('in-progress'),
    // isDeleted: z.boolean().optional().default(false),
    password: z.string({
        invalid_type_error: "Password must be string"
    })
    .max(20, {message: 'Password can not be more than 20 characters'})
    .optional(),
})

export const UserValidation = {
    userValidationSchema,
}