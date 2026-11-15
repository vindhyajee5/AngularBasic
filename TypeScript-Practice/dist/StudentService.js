class StudentService {
    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    displayStudent() {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
        console.log("Student Marks:", this.marks);
    }
}
// Create object
let student1 = new StudentService(101, "Ayaan", 85);
student1.displayStudent();
export {};
//# sourceMappingURL=StudentService.js.map