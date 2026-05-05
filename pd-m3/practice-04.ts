// ! Access modifier

class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number;
    protected userAccountNo: string;

    constructor(userId: number,
        userName: string,
        userBalance: number, userAccountNo: string) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
        this.userAccountNo = userAccountNo;
    };

    addBalance(numOfAmount: number) {
        this.userBalance = this.userBalance + numOfAmount;
    }
};

class StudentAccountInfo extends BankAccount {
    studentAccount() {
        this.userAccountNo;
    }
}

const myAccount = new BankAccount(111, "Mr. Hasan", 50000, "AC/12378945674");

myAccount.addBalance(50);

console.log(myAccount);
