{
    // Access - Modifier

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

        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        public getBalance() {
            return this._balance;
        }
    };


    class ChildClass extends BankAccount {
        // default constructor called super(), under the hood.

        show() {
            this.getBalance();

            // protected property can access by child
            console.log(this.creditCardNumber);
        }
    }



    const userAccount = new BankAccount(110, "A", 100, 'ABC12345');
    // userAccount.addDeposit(0);
    userAccount.addDeposit(20);
    console.log(userAccount.getBalance());
    


    const childObj = new ChildClass(10, "C", 50, 'XYZ1234');

    childObj.show();








}