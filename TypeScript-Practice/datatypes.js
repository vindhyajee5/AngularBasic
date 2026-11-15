"use strict";
//1.String
let empname = "vindhya";
console.log(empname);
//2.Number
let age = 32;
let salary = 300000000;
console.log(age);
console.log(salary);
//3. Boolean
let isActive = true;
console.log(isActive);
//4. Array
let skills = ["java", "springboot", "TypeScript"];
for (let skill of skills) {
    console.log(skill);
}
let marks = [10, 20, 30, 40, 50];
for (let index in marks) {
    console.log("index :", index, "marks :", marks[index]);
}
marks.forEach((value, index) => console.log("index :", index, "marks :", value));
//Tuple
let employeedata = [101, "vindhya", 12345678];
employeedata.forEach((value) => console.log(value));
//Any
let dataany = 100;
dataany = "hello";
dataany = true;
console.log(dataany);
//unknown
let valudata = "TypeScript";
if (typeof valudata == "string") {
    console.log(valudata);
}
//Union
let iddata;
iddata = 123;
console.log(iddata);
iddata = "cc";
console.log(iddata);
//Enum
var Department;
(function (Department) {
    Department[Department["IT"] = 0] = "IT";
    Department[Department["HR"] = 1] = "HR";
    Department[Department["FINANCE"] = 2] = "FINANCE";
})(Department || (Department = {}));
;
let dept = Department.IT;
console.log(dept);
console.log(Department[dept]);
//Null and Undefined
let emptyvalue = null;
let undefinedvalue = undefined;
console.log(emptyvalue, undefinedvalue);
