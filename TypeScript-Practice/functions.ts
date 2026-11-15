//Normal function
function greet():void{
    console.log("welcome to typescripts");
}

greet();

function addition(a:number,b:number)
{
    return a+b;
}

console.log("Addition :", addition(10,20));
//Optional Paramter
function fullName(firstName:string,lastName?:string)
{
    if(lastName)
    {
        return firstName+ " "+lastName;
    }
    return firstName;
}
console.log(fullName("vindhya","prasad"));
console.log(fullName("rahul"));

//Default parameter
function calculateSalary(salary:number,bonus:number=2000)
{
    return salary+bonus;
}
console.log(calculateSalary(1000));
console.log(calculateSalary(1000,5000));

//Arrow function
let multiply=(a:number,b:number)=>a*b;
console.log(multiply(10,5))
let sqare=(a:number)=>a*a;
console.log(sqare(10))

//Rest parameter
function caltotal(...values:number[])
{
    return values.reduce((sum,value)=>sum+value);
}
console.log(caltotal(10,20,30,40,50));