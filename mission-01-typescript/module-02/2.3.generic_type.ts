{
    // Generic type

    // alternative ways to declare array types in ts
    // const rollNumbers: number[] = [1,2,3,4];
    const rollNumber: Array<number> = [1,2,3,4,5];
    const usersName: Array<string> = ['a', 'b', 'c'];
    const booleanList: Array<boolean> = [true, false, true];


    // basic generic format
    type GenericArray<T> = Array<T>

    const rollNumber1: GenericArray<number> = [1,2,3,4,5];
    const usersName1: GenericArray<string> = ['a', 'b', 'c'];
    const booleanList1: GenericArray<boolean> = [true, false, true];


    // generic object
    // not recommended to use direct <object> type
    const user: GenericArray<object> = [
        {
            name: 'a',
            age: 12
        },
        {
            name: 'b',
            age: 20
        },
    ]
    // rather than, we set more specific
    const user1: GenericArray<{name: string; age: number}> = [
        {
            name: 'a',
            age: 12
        },
        {
            name: 'b',
            age: 20
        },
    ]


    
    // generic tuple
    // special kind of array, but follow order of type
    const person: [string, string] = ['a', 'b'];

    type GenericTuple<X,Y> = [X,Y];

    const person1: GenericTuple<string, string> = ['a', 'b'];

    const person2: GenericTuple<number, {name: string; id: number}> = [2023, {name: 'Sabbir', id: 29}];





}