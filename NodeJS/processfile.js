const fs = require("fs");
fs.readFile("dem.txt","utf-8",(err,data)=>{
    if(err){
        throw err.name;
    }
    else{
        console.log(data);
    }
});
//Asynchronous nature ensures 
//How do we know that it process is reffering to the above read file by the err variable used
process.on("uncaughtException",err=>{
    console.error(`there is some uncaught error that needs to be checked ${err}`)
    process.exit(); //For closing the file
})

console.log("this part will be printed the last");