const getTimeClock = () => {
    //Date get current time
    //current year/hours/min/sec
    return new Date().getHours()
    + ":" + new Date().getMinutes() + ':' + new Date().getSeconds();
};

function getSynchronousMsg(){
    return "hello";
}

function getHelloFromAPromise(){
    return Promise.resolve('Hello-promise');
}

function getHollaWithDelay(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(`hollA`);
        },4000)
    });
}

async function caller(){
    const MessageHolla = await getHollaWithDelay();
    console.log(getTimeClock(),MessageHolla);

    const MessageHelloPromise = await getHelloFromAPromise();
    console.log(getTimeClock(),MessageHelloPromise);

    const MessageHello = getSynchronousMsg();
    console.log(getTimeClock(),MessageHello);
 
}

caller();

//Try to have asynchronous functions and functions away from each other
//Thats why we will get await at the last of the code because 