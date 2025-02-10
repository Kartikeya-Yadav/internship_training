// 22 Jan
// Assignment 4
// School Management System

//Class person main parent
class Person {
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    introduce():string {
        return `Hi my name is ${this.name} and I am ${this.age} years old` ;
    }

}

//student class - sub class of parent
class Student extends Person{
    readonly studentId:number;
    grade:number;
    static totalStudents:number = 0;//static property

    constructor(name:string, age:number, id:number, grade:number){
        super(name, age);
        this.studentId = id;
        this.grade = grade;
        Student.totalStudents++;
    }

    static getTotalStudents():number {
        return this.totalStudents;
    }

    introduce(): string {
        return `Hi, I am ${this.name}, a student in ${this.grade}.` ;
    }

}

//Teacher class - sub class of parent
class Teacher extends Person{
    readonly tescherId:number;
    subject?:string;

    static totalTeachers:number = 0;

    constructor(name:string, age:number, id:number, subject?:string){
        super(name, age);
        this.tescherId = id;
        this.subject = subject;
        Teacher.totalTeachers++;
    }

    static getTotalTeachers():number {
        return this.totalTeachers;
    }

    introduce(): string {
        return this.subject ? 
            `Hi, I am ${this.name}, and I teach ${this.subject}.`:
            `Hi, I am ${this.name}.`;
    }

}

//Abstract class 
abstract class Staff extends Person{
    private salary:number;
    protected department:string;

    constructor(name:string, age:number, salary:number, department:string){
        super(name, age);
        this.salary = salary;
        this.department = department;
    }

    abstract workDetails():string;

}


class Clerk extends Staff{
    responsibility:string;

    constructor(name:string, age:number, salary:number, department:string, responsibility:string){
        super(name, age, salary, department);
        this.responsibility = responsibility;
    }

    workDetails(): string {
        return `I am in the ${this.department}, My responsibility is ${this.responsibility}.`;
    }

}


const student01 = new Student("Ravi", 18, 101, 10);
const teacher01 = new Teacher("Uday Patil", 30, 1, "Database");
const teacher02 = new Teacher("Pednekar", 32, 2);

console.log(student01.introduce());
console.log(teacher01.introduce());
console.log(teacher02.introduce());

console.log(Student.getTotalStudents());
console.log(Teacher.getTotalTeachers());

const clark01 = new Clerk("Mohan", 40, 2000, "Computer Science", "Maintaining Files");

console.log(clark01.workDetails());

