function sum(a,b){ //assigning function to a variable.
    //a function without name is anymous function
    return a+b;
}

let b = sum;

console.log(b("Swagat ","Swaroop")); 

//Arrow Function 
//If we want to skip the keyword function then we can use the arrow function.
let a = () =>
{
    console.log("Hello");
}

//If you have only one line return function then you can use only one =>
let k = (a,c) => a+b;
console.log(b(10,1));