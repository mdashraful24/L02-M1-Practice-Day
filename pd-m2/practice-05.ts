// * Ex-1

const createArrayWithGeneric = <T>(value: T) => [value];

const arrayString = createArrayWithGeneric("Akkash");

const arrayNumber = createArrayWithGeneric(123);

const arrayObject = createArrayWithGeneric({
    id: 123,
    name: "Vila"
});

console.log(arrayString, arrayNumber, arrayObject);


// * Ex-2

const createArrayTupleWithGeneric = <X, Y, Z>(param1: X, param2: Y, param3: Z) => [param1, param2, param3];

// const createArrayTupleWithGeneric = <X, Y, Z = null>(param1: X, param2: Y, param3: Z) => [param1, param2, param3];

const mixedArray = createArrayTupleWithGeneric(123, "Num", true);

console.log(mixedArray);


// * Ex-3

// ! exercise review link: https://chatgpt.com/share/69f87bbb-84cc-83a6-aa03-d239e01924d2

// ? T[](array of generic type)
// ? T = type of each student object
// ? T[] = array of that type

interface AllStudents<T> extends RequiredInfo {
    id: number,
    name: string,
    stuFeatures: T;
}

interface StudentFeatures {
    hasPen?: boolean;
    hasCar?: boolean;
    girlFriend?: boolean;
}

interface RequiredInfo {
    birthDate: string;
    bloodGroup: string;
    address: {
        division: string;
        district: string;
        cityOrVillage: string;
    }
}

const addStudentInfoToTable = <T>(...studentInfo: T[]) => {
    return studentInfo.map(students => (
        {
            table: "Student Info Table",
            ...students,
        }
    ))
};

const student1: AllStudents<StudentFeatures> = {
    id: 123,
    name: "Hakim",
    stuFeatures: {
        hasPen: true
    },
    birthDate: "12/12/12",
    bloodGroup: "O+",
    address: {
        division: "Dhaka",
        district: "Gazipur",
        cityOrVillage: "Banshkopa"
    }
};

const student2: AllStudents<StudentFeatures> = {
    id: 234,
    name: "Aziz",
    stuFeatures: {
        hasCar: true,
        girlFriend: false
    },
    birthDate: "12/12/12",
    bloodGroup: "O+",
    address: {
        division: "Dhaka",
        district: "Gazipur",
        cityOrVillage: "Banshkopa"
    }
};

const student3: AllStudents<StudentFeatures> = {
    id: 345,
    name: "Aziz",
    stuFeatures: {
        hasCar: true,
        girlFriend: false
    },
    birthDate: "12/12/12",
    bloodGroup: "O+",
    address: {
        division: "Dhaka",
        district: "Gazipur",
        cityOrVillage: "Banshkopa"
    }
};

// const result1 = addStudentToTable(student1);

console.log(addStudentInfoToTable(student1, student2, student3));
