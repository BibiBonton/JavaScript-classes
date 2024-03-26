class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(firstname, lastname, age, group, yearExperience) {
        super(firstname, lastname, age)
        this.group = group;
        this.yearExperience = yearExperience;
    }

    isGroupTeacher(group) {
        return this.group.includes(group);
    }
}

class Student extends Person {
    static MIN_GRADE_FOR_SCHOLARSHIP = 4;

    constructor(firstname, lastname, age, group, grade) {
        super(firstname, lastname, age)
        this.group = group;
        this.grade = grade;
    }

    get fullName() {
        return `${this.firstname} ${this.lastname}`
    }

    get birthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }

    isEligibleForScholarship() {
        return this.grade >= Student.MIN_GRADE_FOR_SCHOLARSHIP;
    }
}

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 49, '62c', 3.9);

console.log(student1.fullName); // Tom Cruise
console.log(student2.birthYear); // 1975
console.log(student1.isEligibleForScholarship()); // true
console.log(student2.isEligibleForScholarship()); // false
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4
