let emp={
    id:101,
    empname:"vindhya",
    department:"IT",
    salary:10000000

};
console.log(emp);
console.log(emp.empname);
console.log(emp.salary);
emp.salary=300000000;
console.log("updated salary", emp.salary);

//Object with method

let student={
    id:1,
    studentname:"vindhyajee",

    displayDetails():void{
        console.log(this.id,this.studentname);
    }
}
student.displayDetails();

interface EmployeeInterface {
    id: number;
    empname: string;
    department: string;
    salary: number;
    city?: string;
}

let emp1: EmployeeInterface = {
    id: 101,
    empname: "amit",
    department: "IT",
    salary: 75000,
    city: "pune"
};

console.log(emp1);
