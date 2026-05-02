// ! Nullable, Unknown & Never type


// ? nullable type

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB: ${input}`);
    } else {
        console.log(`Form DB: ALL USER`);
    }
};

getUser("12");
getUser(null);

console.log(getUser);


// ? unknown type

const discountCalculator = (input: unknown) => {
    if (typeof input === 'number') {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    } else if (typeof input === 'string') {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice) * 0.1);
    } else {
        console.log("Wrong Input");
    }
};

discountCalculator(120);
discountCalculator("120 TK");
discountCalculator(null);


// ? never type

const throwError = (msg: string): never => {
    throw new Error(msg);
}

throwError('Error...');
