// ! Access modifier

class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number;

    constructor(userId: number,
        userName: string,
        userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    };

    addBalance(numOfAmount: number) {
        this.userBalance = this.userBalance + numOfAmount;
    }
};

const myAccount = new BankAccount(111, "Mr. Hasan", 50000);

myAccount.addBalance(50);

console.log(myAccount);
