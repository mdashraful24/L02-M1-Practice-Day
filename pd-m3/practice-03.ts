// ! Type guard using typeof, in, instanceof and function

// * typeof guard

type Alphanumeric = number | string;

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
};

// console.log(add(2, 2));
// console.log(add("2", 2));
// console.log(add(2, "2"));
// console.log(add("2", "2"));


// * in guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: string;
}

const getUserInfo = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
        // console.log(`${user.name} and his role is ${user.role}`);
    } else {
        // console.log(`${user.name}`);
    }
};

getUserInfo({ name: "Normal", role: "Admin" });


// * instanceof guard

class PersonGuard {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    getSleep(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} ghonta ghumai.`);
    };
};

class Student1 extends PersonGuard {
    constructor(name: string) {
        super(name);
    };

    doStudy(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} ghonta study kore.`);
    };
};

class Teacher1 extends PersonGuard {
    designation: string;

    constructor(name: string, designation: string) {
        super(name);
        this.designation = designation;
    }

    takeClass(numOfHours: number) {
        console.log(`${this.name} designaton ${this.designation} doinik ${numOfHours} ghonta class nei.`)
    };
};


// function guard

const isStudent = (user: PersonGuard) => {
    return user instanceof Student1;
};

const isTeacher = (user: PersonGuard) => {
    return user instanceof Teacher1;
};

const getUserInfo2 = (user: PersonGuard) => {
    if (isStudent(user)) {
        user.doStudy(10);
    } else if (isTeacher(user)) {
        user.takeClass(12);
    } else {
        user.getSleep(6);
    }
};

const student1 = new Student1("Mr. Student");
const teacher1 = new Teacher1("Mr. Teacher", "Senior Lecturer");
const person1 = new PersonGuard("Mr. Fakibaz");

getUserInfo2(person1);


// Only humans make mistakes.
