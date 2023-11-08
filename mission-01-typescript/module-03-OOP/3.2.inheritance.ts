{
    // OOP -> inheritance
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours: number) {
            console.log(`${this.name} usually sleep ${numberOfHours} hours`);
            
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string){
            super(name, age, address);
        };
    }

    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        takenClass(hours: number) {
            console.log(`The teacher ${this.name} usually takes ${hours} class.`)
        }
    }


    const student_obj = new Student('Sabbir', 25, 'Khulna');
    student_obj.getSleep(5);

    const teacher_obj = new Teacher("Ahmmed", 33, 'Khulna', 'professor');
    teacher_obj.takenClass(2)

}