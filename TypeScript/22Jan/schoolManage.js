// 22 Jan
// Assignment 4
// School Management System
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "Hi my name is ".concat(this.name, " and I am ").concat(this.age, " years old");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, id, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = id;
        _this.grade = grade;
        Student.totalStudents++;
        return _this;
    }
    Student.getTotalStudents = function () {
        return this.totalStudents;
    };
    Student.prototype.introduce = function () {
        return "Hi, I am ".concat(this.name, ", a student in ").concat(this.grade, ".");
    };
    Student.totalStudents = 0;
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, id, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.tescherId = id;
        _this.subject = subject;
        Teacher.totalTeachers++;
        return _this;
    }
    Teacher.getTotalTeachers = function () {
        return this.totalTeachers;
    };
    Teacher.prototype.introduce = function () {
        return this.subject ?
            "Hi, I am ".concat(this.name, ", and I teach ").concat(this.subject, ".") :
            "Hi, I am ".concat(this.name, ".");
    };
    Teacher.totalTeachers = 0;
    return Teacher;
}(Person));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, salary, department) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        _this.department = department;
        return _this;
    }
    return Staff;
}(Person));
var Clerk = /** @class */ (function (_super) {
    __extends(Clerk, _super);
    function Clerk(name, age, salary, department, responsibility) {
        var _this = _super.call(this, name, age, salary, department) || this;
        _this.responsibility = responsibility;
        return _this;
    }
    Clerk.prototype.workDetails = function () {
        return "I am in the ".concat(this.department, ", My responsibility is ").concat(this.responsibility, ".");
    };
    return Clerk;
}(Staff));
var student01 = new Student("Ravi", 18, 101, 10);
var teacher01 = new Teacher("Uday Patil", 30, 1, "Database");
var teacher02 = new Teacher("Pednekar", 32, 2);
console.log(student01.introduce());
console.log(teacher01.introduce());
console.log(teacher02.introduce());
console.log(Student.getTotalStudents());
console.log(Teacher.getTotalTeachers());
var clark01 = new Clerk("Mohan", 40, 2000, "Computer Science", "Maintaining Files");
console.log(clark01.workDetails());
