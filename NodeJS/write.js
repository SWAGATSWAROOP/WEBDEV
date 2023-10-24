const fs = require('fs');
const path = require('path');

fs.writeFile('write.txt',"this is new file,we are writing something",(err)=>{
    console.log("Sucessfuly Written");
    if(err)throw err.name;
});

console.log(__dirname);
console.log(__filename);