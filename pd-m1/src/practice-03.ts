// ! Function in typescript


// function => building blocks
// two type: arrow function, normal function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 10);
add(2, '2');


const addNum = (num1: number, num2: number): number => num1 + num2;


// * object => function => method

const poorUser = {
    name: "Ratul",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

poorUser.addBalance(1000000);

// * callback function

const arr: number[] = [1, 2, 3];

const sqrArr = arr.map((elem: number): number => elem * elem);

