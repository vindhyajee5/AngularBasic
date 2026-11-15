class Employee {

    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    displayEmployee(): void {
        console.log("Employee ID:", this.id);
        console.log("Employee Name:", this.name);
        console.log("Employee Salary:", this.salary);
    }
}

// Create object
let emp1 = new Employee(101, "Vindhya", 75000);

// Call method
emp1.displayEmployee();