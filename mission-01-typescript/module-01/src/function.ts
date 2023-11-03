// Normal function
// arrow function
// object -> function -> method
// call back function


// Normal function
function add(num1: number, num2:number=10): number {
    return num1 + num2;
}


// arrow function
const add2 = (num1: number, num2: number=5): number => num1 + num2; 


// object -> function -> method
// this only works in normal function, 
// arrow function does not support this
const personBalance = {
    name: 'Sabbir',
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is ${this.balance+balance}`
    }
}

console.log(personBalance.addBalance(10));


// call back function
const numberOfArray: number[] = [2, 4, 8];

const newNumberOfArray: number[] = numberOfArray.map((element: number): number => element * element );

console.log({newNumberOfArray});