"use strict";
{
    let person = "Sabbir Ahmmed";
    console.log(person);
    // array of number
    const numArr = [1, 2, 3];
    numArr.push(10);
    // array of string
    const stringArr = ['sabbir', 'ahmmed'];
    stringArr.push('md: ');
    // array of fixed number and string combination
    const combinationArr = ['sabbir', 185];
    combinationArr[0] = 'Sabbir Ahmmed';
    combinationArr[1] = 29;
    // object
    const personInfo = {
        firstName: 'Sabbir',
        lastName: 'Ahmmed',
        dept: 'cse',
        id: 29,
        isAdmin: true
    };
    console.log(personInfo.firstName + " " + personInfo.lastName);
}
