const fs = require('fs');
const path = require('path');

// fs.writeFile('write.txt',"this is new file,we are writing something",(err)=>{
//     console.log("Sucessfuly Written");
//     if(err)throw err.name;
// });

console.log(__dirname);
console.log(__filename);

//logging - keeps track of all functionality
//By using path join to add path
fs.writeFile(path.join(__dirname,"newFile.txt"),"Write the lines in the new file",(err)=>{
    if(err)throw err.name;
});


