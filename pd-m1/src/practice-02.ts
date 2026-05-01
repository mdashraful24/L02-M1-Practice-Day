// ! Practice for Primitive and Non-Primitive Types

// JavaScript types: string, number, boolean, undefined, null.

// TypeScript type: any, never, unknown, void

// Implicit => depends on data value

// Explicit => depends on user (user assign on data types)

// JavaScript is dynamically type language. thats why we can change any data, any value javascript don't mind.


// * Primitive

let userName: string = "Ashraful Islam Ratul";

userName = "Ratul Man";
userName = 233;

let userId: number = 123;

userId = 567;
userId = "adfasdfk";

let isAdmin: boolean = true;

isAdmin = false;
isAdmin = 123;

let x: any = undefined;
let y: undefined = undefined;
let z: never;
let r: unknown = undefined;

x = 123;
y = 123;
z = 123;
r = 123;



// * Non-Primitive

// array, object

let bazarList: string[] = ["sop", "cover", "food"];

bazarList.push("grocery");


let mixArr: (string | number)[] = ["montu", 20, "jhontu", 30, "bantu", 40];

mixArr.push(50);
mixArr.push("mintu");
mixArr.push(false);

// ? Tuple
let coordinates: [number, number] = [10, 20];
let coordinates2: [number, number] = [10, 20, 30];

let friends: [string, string] = ["Piash Islam", "Miad khan"];


// reference type: object

const user: {
    readonly userId: number; // * access modifier
    organization?: string;
    firstName: string;
    middleName?: string; // * optional type
    lastName: string;
    role: "Student"; // * value => type (Literal Type)
    otherInfo: {
        age: number;
        gender: string;
        status: string;
        isMarried: boolean;
    }
} = {
    userId: 22150076,
    organization: "Ma Baba-r Sontan",
    firstName: "Ashraful",
    middleName: "Islam",
    lastName: "Ratul",
    role: "Student",
    otherInfo: {
        age: 25,
        gender: "male",
        status: "Bachelor",
        isMarried: false
    }
}

user.role = "Ma Baba-r Chele";
user.userId = 1234;

console.log(user);
