{

    // type alias -> common type creation
    // convention: Camel-case
    // we can create alias for object, string, number, boolean etc

    type UserName = string;
    type IsAdmin = boolean;
    type Student = {
        name: string;
        age: number;
        contact?: string;
        gender: string;
        address: string;
    };

    const student1: Student = {
        name: 'A',
        age: 12,
        contact: '017.....',
        gender: 'male',
        address: 'Khulna'
    }

    const student2: Student = {
        name: 'B',
        age: 15,
        contact: '019.....',
        gender: 'female',
        address: 'Khulna'
    }

    const headTeacher: UserName = 'ABC';
    const isAdmin: IsAdmin = true;



    // type alias for function
    type Add = (num1: number, num2: number) => number;
    
    const add: Add = (a, b) => a + b;


}