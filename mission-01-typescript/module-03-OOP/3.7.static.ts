{
    // static keyword
    // allocate class/one memory
    // it is direct relation with class

    class Counter {
        static count: number = 0;

        static increment() {
            return (Counter.count += 1);
        };

        static decrement() {
            return (Counter.count -= 1);
        };
    };

    // const instance1 = new Counter();
    // console.log(instance1.increment());  // 1 -> different memory
    console.log(Counter.increment()); //  -> same memory

    // const instance2 = new Counter();
    // console.log(instance2.increment()); // 1  --> different memory
    console.log(Counter.increment()); //  -> same memory



    
}