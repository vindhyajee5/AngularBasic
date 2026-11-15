import { Student } from "./Student";

class StudentService implements Student {

    id: number;
    name: string;
    marks: number;

    constructor(id: number, name: string, marks: number) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    displayStudent(): void {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
        console.log("Student Marks:", this.marks);
    }

   
}

// Create object
let student1 = new StudentService(101, "Ayaan", 85);

student1.displayStudent();

