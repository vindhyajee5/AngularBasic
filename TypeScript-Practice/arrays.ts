let numbers:number[]=[10,20,30,40,50];
console.log(numbers);
numbers.forEach((value)=>console.log(value));
numbers.push(60);
numbers.forEach((value)=>console.log(value));
numbers.pop();
numbers.forEach((value)=>console.log(value));
//map
let doubled=numbers.map((value:number)=>value*2);
console.log(doubled);
let skills1: string[] = ["java", "springboot", "typescript"]
let uppercaseskills=skills1.map((value)=>value.toUpperCase());
console.log(uppercaseskills);
let employees = [
    { id: 101, name: "Rahul", salary: 50000 },
    { id: 102, name: "Amit", salary: 60000 },
    { id: 103, name: "Priya", salary: 70000 }
];
let employeesresult=employees.map((value)=>
({
     EmployeeName : value.name,
     annualSalary: value.salary * 12
}));
console.log(employeesresult);
//filter
let filter=numbers.filter((value)=>value>20)
console.log(filter);
//find
let found=numbers.find((value)=>value==80)
console.log(found);
//reduce
let total=numbers.reduce((sum:number,value:number)=>sum+value);
console.log(total);