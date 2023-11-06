{

    let person: string = "Sabbir Ahmmed"
    console.log(person);
    
    // array of number
    const numArr: number[] = [1,2,3];
    numArr.push(10)
    
    // array of string
    const stringArr: string[] = ['sabbir', 'ahmmed'];
    stringArr.push('md: ')
    
    // array of fixed number and string combination
    const combinationArr: [string, number] = ['sabbir', 185];
    combinationArr[0] = 'Sabbir Ahmmed';
    combinationArr[1] = 29;
    
    
    // object
    const personInfo: {
        firstName: string, 
        middleName?: string,
        lastName: string,
        dept: string,
        id: number,
        isAdmin: boolean
     } = {
        firstName: 'Sabbir',
        lastName: 'Ahmmed',
        dept: 'cse',
        id: 29,
        isAdmin: true
    }
    
    console.log(personInfo.firstName+" "+personInfo.lastName);
    

    // some other types -> null, unknown, never, void
    // Generally error function return never type


}