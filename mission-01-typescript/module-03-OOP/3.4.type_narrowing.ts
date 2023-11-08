{
    // type guard or type narrowing

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log("I am making sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        };
        makeBark(){
            console.log("I am barking")
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        };
        makeMeaw(){
            console.log("I am meawing..");
        }
    }

    const dog = new Dog('Dog Bhai', 'dog');
    const cat = new Cat('Cat Bhai', 'cat');


    // now making a common function to call their perspective method
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if(isDog(animal)) {
            return animal.makeBark();

        } else if(isCat(animal)) {
            return animal.makeMeaw();
        } else {
            return animal.makeSound();
        }
    }

    getAnimal(cat);





}