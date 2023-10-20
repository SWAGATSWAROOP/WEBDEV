//Exception :- unexpected issue

//Naive approach
// let a = "hello";
// if(a != undefined){
//     throw new Error("Swagat");
// }
// else{
//     console.log("this is undefined");
// }



//Try and catch block
try{
    let a = 5;
    console.log("we are inside the try block");
    // blockchain();

}catch(error){
    console.log("Something went wrong");
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("this code is always executed");
}