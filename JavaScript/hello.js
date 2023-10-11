"use strict"

console.log(2+2);
let a = 5;
//while - pre condition
//do while post condition check

while(a--){
    console.log("Swagat");
}

//do while
let i = 1;
do{
    console.log("Munu");
    i++;
}while(i < 5);

//for loop
for(let a = 1;a<=5;a++){
    console.log("Sanu");
}

//Switch Statements
let day = "Tue";
switch(day){
    case "Mon":
    case "Sun":
        console.log("Start or End");
        break;
    case "Tue":
        console.log("IS");
        break;
    default:
        console.log("Just another day");
}

function hello(){
    console.log("Hello");
}

hello();

let n = "Swagat";
//Using template holder
function hello1(n){
    console.log(`My name is ${n}.`);
}

hello1(n);

//Return a value from the function
let f = 1;
let g = 2;
 
function sum(a,b){
    return a+b;
}

console.log(sum(f,g));