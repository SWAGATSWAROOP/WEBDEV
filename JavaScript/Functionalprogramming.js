//callbacks,higher-order function,closure

let swagat = ()=> {
    console.log("Swagat");
}

// Time in miliseconds
// setInterval(swagat,5000);

//set timeout function : calling function after some time
setTimeout(swagat,5000); //Here 5s

//A example of a function that is callback execute after some time
function s(a,b,handle){
    let result = a+b;
    handle(result); 
}

function print(res){
    console.log(res);
}
//Here s is higher order function and print is a callback function
s(9,9,print); //Its calling print function only if we pass it as arguement

//In js we can call pass and return functions
function Naveen(){
    return ()=> {
        console.log("MMM");
    }
}

let Aryan = Naveen();
Aryan();

//Clousure
function N(){
    let num = 20;
    console.log("Swagat");
    return ()=> {
        let num3 = 10; 
        console.log("MMM",num3,num);
    }
}
let Mamu = N();
Mamu();
Mamu();

//if we remove the outer function then it refers to the function only
let M = N;
M;