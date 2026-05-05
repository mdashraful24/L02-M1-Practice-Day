// ! Class and Object

class Student {
    id: number;
    name: string;
    course: string;

    constructor(id: number, name: string, course: string) {
        this.id = id;
        this.name = name;
        this.course = course;
    };

    studentInfo(numOfHours: number) {
        console.log(`My name is ${this.name} and I am studying ${this.course} and I study for ${numOfHours} hours. My student ID is ${this.id}.`);
    };
};

const studentResult = new Student(221, "Ashraful Islam Ratul", "Next Level Development");

studentResult.studentInfo(10);