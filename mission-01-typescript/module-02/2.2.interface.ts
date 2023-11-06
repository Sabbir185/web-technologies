{
    // interface is another alternative of type alias
    // type support primitive types also
    // but interface only for object

    // primitive type
    type Role = number;
    type User1 = {
        name: string;
        age: number
    }

    interface User2 {
        name: string;
        age: number
    }

    // intersection with type 
    type UserWithRole1 = User1 & {role: string};

    // intersection with interface
    interface UserWithRole2 extends User1 {
        role: string
    }

    const person1: UserWithRole2 = {
        name: 'Sabbir',
        age: 50,
        role: 'full stack software developer'
    }


    // Javascript Object
    // array, function

    type Roll_11 = number[];
    interface Roll_12 {
        [index: number] : number
    }
    const rollNumbers1: Roll_11 = [1,2,3,4,5];
    const rollNumbers2: Roll_12 = [1,2,3,4,5];


    // function
    type Add_1 = (a: number, b:number) => number;
    interface Add_2 {
        (a: number, b:number) : number;
    }
    const add1: Add_1 = (a, b) => a + b;
    const add2: Add_2 = (a, b) => a + b;







}