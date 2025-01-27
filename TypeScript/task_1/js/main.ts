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

console.log(teacher);
