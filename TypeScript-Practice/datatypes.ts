//1.String
let empname:string="vindhya";
console.log(empname);
//2.Number
let age:number=32;
let salary:number=300000000;
console.log(age);
console.log(salary);
//3. Boolean
let isActive:boolean=true;
console.log(isActive);
//4. Array
let skills:string[]=["java","springboot","TypeScript"];
for(let skill of skills)
{
    console.log(skill);
}
let marks:number[]=[10,20,30,40,50];
for(let index in marks)
{
    console.log("index :",index,"marks :",marks[index]);
}

marks.forEach((value: number, index: number)=>console.log("index :",index,"marks :",value));
//Tuple
let employeedata:[number,string,number]=[101,"vindhya",12345678];
employeedata.forEach((value)=>console.log(value));

//Any
let dataany:any=100
dataany="hello"
dataany=true;
console.log(dataany);
//unknown
let valudata:unknown="TypeScript";
if(typeof valudata=="string")
{
    console.log(valudata);
}
//Union
let iddata:number|string;
iddata=123;
console.log(iddata);
iddata="cc";
console.log(iddata);
//Enum
enum Department{IT,HR,FINANCE};
let dept:Department=Department.IT;
console.log(dept);
console.log(Department[dept]);
//Null and Undefined
let emptyvalue:null=null;
let undefinedvalue:undefined=undefined;
console.log(emptyvalue,undefinedvalue);
