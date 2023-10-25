const express = require('express');

//App is an object used to interact with express functional
const app = express();
app.get('/',(req,res)=>{
    res.send("hello");
});

//Adding a new route
app.get('/swagat',(req,res) =>{
    res.send("Hello Swagat");
})

const port = 3000;
app.listen(port,()=>console.log(`listeng on port ${port}`));

