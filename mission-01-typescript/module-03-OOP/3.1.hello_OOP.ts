{


    class Animal {
        public name: string;
        public species: string;
        public sound: string;
    
        constructor(name: string, sound: string, species: string) {
            this.name = name;
            this.sound = sound;
            this.species = species;
        }
    
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }

    };

    const dog = new Animal("A", "Ghew Ghew", "dog");
    const cat = new Animal("B", "Meaw Meaw", "cat");

    dog.makeSound();
    cat.makeSound();



    // we can make constructor and class properties simplicity by TS
    class Animal1 {
        constructor(public name:string, public sound: string, public species: string){};
        makeSound() {
            console.log(`From Animal1: The ${this.name} says ${this.sound}`);
        }
    }

    const dog1 = new Animal1("A", "Ghew Ghew", "dog");
    const cat1 = new Animal1("B", "Meaw Meaw", "cat");

    dog1.makeSound();
    cat1.makeSound();









}