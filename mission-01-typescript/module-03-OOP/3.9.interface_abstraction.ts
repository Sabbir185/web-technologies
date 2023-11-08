{
    // interface and abstraction

    //--------interface for object type----------
    interface User {
        name: string;
        age: number
    };

    const user: User = {
        age: 20,
        name: "ABC"
    }
    //-------------------------------------------

    // Now interface for class
    // give us idea or shape for some action
    // interface ke implements kora lage

    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("I am starting the car engine");
        };
        stopEngine(): void {
            console.log("I am stopping the car engine");
        };
        move(): void {
            console.log("I am moving");
        };
    };

    const toyatoCar = new Car1();
    toyatoCar.startEngine();



    // Abstract class
    // same as interface but we have freedom for method implementation
    // we can some set abstraction or normal function/method
    // by interface, we can achieve 100% abstract class 
    // ---> abstract class ke extends kore tar child

    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log("I am just testing");
        }
    };

    class ToyatoCar extends Car2 {
        startEngine(): void {
            console.log("I am starting the car engine");
        };
        stopEngine(): void {
            console.log("I am stopping the car engine");
        };
        move(): void {
            console.log("I am moving");
        };
    }

    const hondaCar = new ToyatoCar();
    hondaCar.move();









}