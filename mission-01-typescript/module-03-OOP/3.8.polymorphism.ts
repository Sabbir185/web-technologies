{
    // Polymorphism
    // same method, but different haviour/result
    // different place, different result

    class Person {
        getSleep(){
            console.log("I am sleeping for 8 hours per day.");
            
        }
    }

    class Student extends Person {
        getSleep(): void {
            console.log("I am sleeping for 7 hours per day.");
        }
    }

    class Developer extends Person {
        getSleep(): void {
            console.log("I am sleeping for 6 hours per day.");
        }
    }

    const person = new Person();
    const student = new Student();
    const developer = new Developer();

    // common function
    const getSleepingHours = (params: Person) => {
        params.getSleep();
    }

    getSleepingHours(person)
    getSleepingHours(student)
    getSleepingHours(developer)



    // 2nd example -> for method's different parameter
    class Shape {
        getArea(): number {
            return 0;
        }
    }

    // pi * r * r
    class Circle {
        radius: number;
        constructor(radius: number) {
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * (this.radius * this.radius);
        }
    }

    // height * weight
    class Rectangle {
        height: number;
        width: number;
        constructor(height: number, width: number) {
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width
        }
    }

    // common function
    const getShapeArea = (params: Shape) => {
        console.log(params.getArea());
        
    }

    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(10,20);

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)










}