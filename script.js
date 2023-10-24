
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(newSalary) {
        this.salary = newSalary;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }

    getSalary() {
        return this.salary * 3;
    }
}

const programmer1 = new Programmer("John", 30, 50000, ["JavaScript", "C#"]);
const programmer2 = new Programmer("Alice", 25, 60000, ["php", "C++"]);

console.log("Programmer 1:");
console.log("Name:", programmer1.name);
console.log("Age:", programmer1.age);
console.log("Salary:", programmer1.getSalary());
console.log("Languages:", programmer1.lang);

console.log("\nProgrammer 2:");
console.log("Name:", programmer2.name);
console.log("Age:", programmer2.age);
console.log("Salary:", programmer2.getSalary());
console.log("Languages:", programmer2.lang);
