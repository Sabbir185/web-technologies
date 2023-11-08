{
    // Getter and Setter
    // we can access and assign value like without function
    // as a primitive 
    // It is alternative of method like addDeposit(), getBalance();

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;
        protected creditCardNumber: string;

        constructor(id: number, name: string, balance: number, creditCardNumber: string){
            this.id = id;
            this.name = name;
            this._balance = balance;
            this.creditCardNumber = creditCardNumber;
        };

        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        set addDeposite(amount: number) {
            this._balance += amount;
        }


        // public getBalance() {
        //     return this._balance;
        // }

        get balance() {
            return this._balance
        }


    };



    const userAccount = new BankAccount(110, "A", 100, 'ABC12345');
    // userAccount.addDeposit(0);
    // userAccount.addDeposit(20);

    const balance = userAccount.balance;
    console.log({balance});

    userAccount.addDeposite = 50;

    const new_balance = userAccount.balance;
    console.log({new_balance});

    

    






}