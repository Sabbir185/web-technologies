{
    // function with generic
    const createArray = (param: string): string[] => {
        return [param];
    }

    // we can make it generic type function
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }


    const res1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')
    const resGeneric2 = createArrayWithGeneric<boolean>(true)

    type TUser = {id: number; name: string};
    const resGenericObj = createArrayWithGeneric<TUser>({
        id: 222,
        name: "Mr. X"
    });


    // generic with tuple function
    const createGenericArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const res_10 = createGenericArrayWithTuple<number, string>(22, 'Okay');
    const res_12 = createGenericArrayWithTuple<string, {is_name: boolean}>('sabbir', {is_name: true});



    // dynamic
    const addCourseStudent = <T>(student: T) => {
        const course = "Next Level Web Developer";
        return {...student, course}
    }

    const student1 = addCourseStudent({
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    })
    
    const student2 = addCourseStudent({
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple",
    })

}