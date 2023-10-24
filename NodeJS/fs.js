//File System module
//reading files,writing files,perform calculation or modifications.
const fs = require('fs');
fs.readFile('demo.txt','utf-8',(err,data)=>{
    if(err) throw err.name;
    else console.log(data);
})

