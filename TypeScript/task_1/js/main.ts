interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    [key: string]: any;
}

const teacher: Teacher = {
    firstName: 'Valerie',
    lastName: 'Salicrup',
    fullTimeEmployee: false,
    location: 'USA',
    contract: false,
};

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'Nick',
    lastName: 'Fury',
    location: 'New York',
    fullTimeEmployee: true,
    numberOfReports: 1000,
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }


}
console.log(teacher);
console.log(director1);

const result = printTeacher('John', 'Doe');
console.log(result);

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());