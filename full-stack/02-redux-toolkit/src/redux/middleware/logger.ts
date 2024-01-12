/* eslint-disable @typescript-eslint/no-explicit-any */

const Logger = (state: any) => (next: any) => (action: any) => {
    console.log("Current State  => ", state.getState());
    console.log("Action => ", action);
    next(action);
    console.log("Next state => ", state.getState());
};

export default Logger;


// Currying function
const add = (a: number) => {
    return (b: number) => {
        return (c: number) => {
            return a + b + c;
        };
    };
};

console.log("From Currying function => ", add(1)(2)(3) )