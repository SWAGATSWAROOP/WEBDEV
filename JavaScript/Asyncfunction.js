async function f1() {
    return Promise.resolve(1);
}

f1().then(console.log('success'));

//Await

async function f(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve('done'),2000);
    });
    //Promise gets the highest priority in execution
    let result = await promise; //fetch the promise
    console.log(`sucess - the result is ${result}`);
    console.log(`hello`);
    console.log(`BlockChain`);
}

f();