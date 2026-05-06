//JS is a Statically typed programming language.

// let age:number = 30;
// console.log(typeof(age))

// age:string  = "Thirty"
// console.log(typeof(age))

// console.log(age)


/*
let data:number=10;   //number
data="Ten";  // Compile time error
console.log(data);
*/


//Type Script is Type Safty

let num1:string="5";
let num2:number=3;

const result: number = num1+num2;  //Compile Time Error: Type 'string' is not assignable to type 'number'
console.log(result);

