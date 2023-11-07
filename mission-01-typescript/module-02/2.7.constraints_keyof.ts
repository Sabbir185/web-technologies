{
    // constraints -> keyof keywords
    // help use to make union type -> |

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    };

    type Owner = 'bike' | 'car' | 'ship';
    type Owner2 = keyof Vehicle;


    // find object value dynamically
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: "Mr. X",
        age: 26,
        address: 'Khulna'
    }

    const car = {
        name: "Toyato",
        year: 2023
    } 

    const result = getPropertyValue(user, 'age')

    const result2 = getPropertyValue(car, 'year')



}