// ! type interface

// ? Interface cannot be declared on primitive data type

interface StudentInfo {
    id: number;
    name: string;
    address?: {
        division: string;
        district: string;
        city: string;
    }
};

const student1: StudentInfo = {
    id: 123,
    name: "Rahul"
};

const student2: StudentInfo = {
    id: 456,
    name: "Fahim",
    address: {
        division: "Dhaka",
        district: "Savar",
        city: "Ashulia"
    }
};

const { address } = student2;
console.log({ address });
