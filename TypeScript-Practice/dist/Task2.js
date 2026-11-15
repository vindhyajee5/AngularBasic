"use strict";
class Task2 {
    constructor() {
        // 1. String
        this.studentName = "Ayaan";
        // 2. Number
        this.age = 15;
        // 3. Boolean
        this.isPassed = true;
        // 4. Array
        this.skills = ["Java", "Spring Boot", "TypeScript"];
        // 5. Object
        this.student = {
            id: 101,
            name: "Ayaan",
            city: "Pune"
        };
    }
    // Display all variables
    displayDetails() {
        console.log("Name:", this.studentName);
        console.log("Age:", this.age);
        console.log("Passed:", this.isPassed);
        console.log("Skills:");
        this.skills.forEach(value => {
            console.log(value);
        });
        console.log("Student Object:", this.student);
    }
}
// Create object
let obj2 = new Task2();
// Access method
obj2.displayDetails();
//# sourceMappingURL=Task2.js.map