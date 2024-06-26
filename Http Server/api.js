const express = require('express');

//App is an object used to interact with express functional
const app = express();
app.get('/',(req,res)=>{
    res.send("hello");
});

//Adding a new route
app.get('/swagat',(req,res) =>{
    res.send("Hello Swagat");
});

//Hard Coding port values 
//But now using the port that may be provided by a cloud provider by using process module env that can use the port provided the cloud provider
//the process env modules store all the environment variables used. 
const port = process.env.port || 3000;

//year and month are url getting data from url needs this format
//month and year are req parameters
//Dyanamic Routing routing to a different url
app.get('/swagat/swaroop/:year/:month',(req,res)=>{
    res.send(req.params);
});

app.listen(port,()=>console.log(`listeng on port ${port}`));

