"use strict";
{
    // Normal function
    // arrow function
    // object -> function -> method
    // call back function
    // Normal function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    // arrow function
    const add2 = (num1, num2 = 5) => num1 + num2;
    // object -> function -> method
    // this only works in normal function, 
    // arrow function does not support this
    const personBalance = {
        name: 'Sabbir',
        balance: 0,
        addBalance(balance) {
            return `My new balance is ${this.balance + balance}`;
        }
    };
    console.log(personBalance.addBalance(10));
    // call back function
    const numberOfArray = [2, 4, 8];
    const newNumberOfArray = numberOfArray.map((element) => element * element);
    console.log({ newNumberOfArray });
}
