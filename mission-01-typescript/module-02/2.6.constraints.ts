{
    // constraints -> do force for my required fields with types
    type TConstraints = {id: number; name: string; email: string};

    const addCourseToStudent = <T extends TConstraints>(student: T) => {
        const course = "Nest Level Web Developer";
        return {
            ...student,
            course,
        }
    }

    const student1 = addCourseToStudent({
        id: 12,
        name: 'sabbir',
        email: 'sabbir.py@gmail.com'
    });

    const student2 = addCourseToStudent({
        id: 12,
        name: 'sabbir',
        email: 'sabbir.py@gmail.com',
        phone: "01725151578",
        dept: 'CSE',
        year: 2023
    });

}