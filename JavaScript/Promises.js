//create a promise
let promise = new Promise(function(resolve,reject){
    //pretend it takes jack and jill
    setTimeout(() =>{
        //Sucess Condition :- water has been fetched
        resolve("Hurray! Jack And  Jill Are back with water")
    },5000);

    setTimeout(function(){
        reject(
            //throwing the error
            new Error("jack and jill fell down"));
    },2000);
});

//consumer function :- the one which will receive promise
const grandParent = () =>{
    //then will indicate promise has been fullfilled
    promise.then((result) =>{
        console.log(`Cooking the vegegetable with ${result}`);
    });
    //try catch used for error handling
    promise.catch(function(error){
        console.log(`omg ${error.message}`)
    });
};

grandParent();

//Implement both resolve and reject for this example