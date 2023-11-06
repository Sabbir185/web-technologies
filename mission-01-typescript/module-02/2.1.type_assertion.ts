{

    // type assertion -> force to use my type -> because i know my type
    let anything: any;
    anything = 'This is Sabbir Ahmmed';

    (anything as string).charAt(0)  // any variable now string
    // (anything as number).toFixed(2)  // any variable now number




    // another example
    const kgToGm = (value: number | string): number | string | undefined => {
        if(typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`;

        } else if(typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000) as number  // because i know my input type
    const result2 = kgToGm("1000") as string  // because i know my input type


    // try catch error
    type CustomError = {
        message: string
    }

    try {
        
    } catch (err) {
        console.log((err as CustomError).message);
    }



}