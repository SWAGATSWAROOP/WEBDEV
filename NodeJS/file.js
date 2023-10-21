//file system
//file system module - fs module
//install node js - fs module will be installed
//Abstraction using the code without knowing what is behind
const fs = require("fs"); //require just like import statement
fs.readFile("demo.txt","utf-8",(err,data) =>{
    if(err){
        throw err.name; //It throws an error.
    }
    else{
        //One way without using utf-8 in function paramenter
        //console.log(data.toString()); //without to string we get data in form of non human radable or hexadecimal format.
        console.log(data);
    }
})
