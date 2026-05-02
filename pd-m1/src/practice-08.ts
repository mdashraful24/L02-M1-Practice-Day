// ! Ternary, Nullish Coalescing & Optional Chaining


// * ? : ternary operator : decision making
// * ?? : nullish coalescing operator : null/undefined
// * ?. optional chaining


// ? ternary operator

const userAge = 25;

const biyerJonnoEligible = (age: number) => {
    const result = age > 21 ? "You are eligible" : "You are not eligible"

    console.log(result);
};

biyerJonnoEligible(29);


// ? nullish coalescing operator

const userTheme = undefined;
// const userTheme = null;

const selectedTheme = userTheme ?? "Light theme";

console.log(selectedTheme);


// ? different between ternary and nullish

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest!";

const resultWithNullish = isAuthenticated ?? "You are guest!";

console.log({ resultWithTernary }, { resultWithNullish });


// ? optional chaining

const user: {
    address: {
        city: string;
        town: string;
        postalCode?: string;
    }
} = {
    address: {
        city: "Savar",
        town: "Ahsulia",
    }
}

const postalCode = user?.address?.postalCode;
console.log(postalCode);
