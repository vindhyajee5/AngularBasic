class Task1
{

    getMessage(name:string, age:number):string
    {
       return `My name is ${name} and I am ${age} years old`;
    }
}
// Create object
let obj1 = new Task1();

let result1:string =obj1.getMessage("Vindhyajee",32);

console.log(result1);