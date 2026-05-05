// ! Polymorphism, the 2nd pillar of OOP

class Person {
    getSleep(): void {
        console.log(`I am a normal happy person, I sleep for 8 hours.`);
    }
}

class Student extends Person {
    getSleep(): void {
        console.log(`I am a student, I sleep for 7 hours.`)
    }
}

class NextLevelDeveloper extends Person {
    getSleep(): void {
        console.log(`I am a next level developer, I sleep for 6 hours.`)
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person1);
