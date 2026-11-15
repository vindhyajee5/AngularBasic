"use strict";
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    displayEmployee() {
        console.log("Employee ID:", this.id);
        console.log("Employee Name:", this.name);
        console.log("Employee Salary:", this.salary);
    }
}
// Create object
let emp1 = new Employee(101, "Vindhya", 75000);
// Call method
emp1.displayEmployee();
//# sourceMappingURL=employee.js.map