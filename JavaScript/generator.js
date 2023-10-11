//generator function

function *disp(){
    console.log("Initial");
    yield "Initial Pause";
    console.log("How");
    yield "first pause";
    console.log("Are");
    yield "second pause";
    console.log("You");
}

let a = disp();
a.next();
a.next();