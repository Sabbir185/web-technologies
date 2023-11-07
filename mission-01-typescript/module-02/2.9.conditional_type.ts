{
    // Conditional type
    // ekta type orekta type er condition er upor jodi dependent thake

    type A1 = number;
    type B1 = number;

    type X = A1 extends null ? true : false;  // conditional type
    type Y = B1 extends null ? 
                true
                :
                B1 extends undefined ?
                    undefined
                    :
                    any; 


                    
    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string
    };

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    // what is the type of HasPlane
    type HasPlane = CheckVehicle<"plane">


}