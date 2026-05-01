// ! Type Alias in typescript


type User = {
    id: number;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    },
    gender: string;
    age: number;
    contactNo: string;
    address: {
        division: string;
        city: string;
    }
}

const user1: User = {
    id: 123,
    name: {
        firstName: "Mr. Y",
        lastName: "Z"
    },
    gender: "male",
    age: 25,
    contactNo: "01799999999",
    address: {
        division: "Dhaka",
        city: "Ashulia"
    }
}

const user2: User = {
    id: 456,
    name: {
        firstName: "Mst. X",
        middleName: "Y",
        lastName: "Z"
    },
    gender: "female",
    age: 25,
    contactNo: "01999999999",
    address: {
        division: "Chattogram",
        city: "Chattogram"
    }
}


// more easy

type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;
const myName: Name = "Ashraful Islam Ratul";


// alias in Function

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;


