class BankAccount{
    #balance;

    constructor(account, initial){
        this.account = account;
        this.#balance = initial;
    }

    getBalance(){
        console.log( this.#balance);
    }

    diposit(amount){
        this.#balance += amount;
    }

    withdral(amount){
        if(this.#balance>=amount){
            this.#balance -= amount;
        }
        else{
            console.log("Insufficient Balance");
        }
    }
}

const myAcc = new BankAccount(111, 5000.0);

myAcc.getBalance();

myAcc.diposit(1000);
myAcc.getBalance();

myAcc.withdral(500);
myAcc.getBalance();

myAcc.withdral(10000);
myAcc.getBalance();