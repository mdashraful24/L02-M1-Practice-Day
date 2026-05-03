// ! type assertion

let anyThing: any;

anyThing = 123;

(anyThing as number)

const calculator = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`;
    }
};

const result1 = calculator(123) as number;
console.log({ result1 });

const result2 = calculator("123 kg") as string;
console.log({ result2 });


interface CustomError {
    message: string;
}

try { } catch (err) {
    console.log((err as CustomError).message);
}
