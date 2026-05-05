// ! Inheritance, the 1st Pillar of OOP

class Person {
    id: number;
    name: string;
    course: string;

    constructor(id: number, name: string, course: string) {
        this.id = id;
        this.name = name;
        this.course = course;
    };

    commonInfo(numOfHours: number) {
        console.log(`This person is very lazy and they sleep ${numOfHours} hours.`)
    }
}

class Student extends Person {

    studentInfo(numOfHours: number) {
        console.log(`My name is ${this.name} and I am studying ${this.course} and I study for ${numOfHours} hours. My student ID is ${this.id}.`);
    };
};

class Teacher extends Person {
    designation: string;

    constructor(id: number, name: string, designation: string, course: string) {

        super(id, name, course);

        this.designation = designation;
    };

    teacherInfo(numOfHours: number) {
        console.log(`${this.name} is a ${this.designation} who teaches ${this.course} and he takes ${numOfHours} hours of classes. Their ID is ${this.id}.`);
    }
}

const studentResult = new Student(221, "Ashraful Islam Ratul", "Next Level Development");

const teacherResult = new Teacher(221, "Mr. X", "Senior Lecturer", "Next Level Development");

const personResult = new Person(221, "Mr. X", "Next Level Development");

studentResult.studentInfo(10);
teacherResult.teacherInfo(8);
personResult.commonInfo(16);
