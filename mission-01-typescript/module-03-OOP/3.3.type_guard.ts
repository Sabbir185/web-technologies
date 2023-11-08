{

    // type guard -> using typeof keyword
    type AlphaNumeric = string | number;

    const add = (num1: AlphaNumeric, num2: AlphaNumeric): AlphaNumeric => {
        if(typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 + num2;
        } else {
            return num1.toString() + num2.toString();
        }
    }

    const result = add('2', '5');
    console.log(result);
    


    // type guard -> using in keyword
    type NormalUser = {
        name: string
    };
    type AdminUser = {
        name: string;
        role: string
    }

    const getUser = (user: NormalUser | AdminUser) => {
        // here user.role is not available. TS only suggestion us for common properties
        // that's why, we need some checking

        if("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);

        } else {
            console.log(`My name is ${user.name}`);
        }
    };


    const normalUser: NormalUser = {name: 'Sabbir'};
    const adminUser: AdminUser = {name: 'Mr. Admin', role: 'Admin'};

    getUser(adminUser)



}