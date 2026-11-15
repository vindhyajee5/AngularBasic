class Task2 {

    // 1. String
    studentName: string = "Ayaan";

    // 2. Number
    age: number = 15;

    // 3. Boolean
    isPassed: boolean = true;

    // 4. Array
    skills: string[] = ["Java", "Spring Boot", "TypeScript"];

    // 5. Object
    student: { id: number; name: string; city: string } = {
        id: 101,
        name: "Ayaan",
        city: "Pune"
    };

    // Display all variables
    displayDetails(): void {

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