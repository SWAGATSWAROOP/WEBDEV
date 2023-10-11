console.log('one');
console.log('second');
console.log('three');

//Now using async
console.log('one');
setTimeout(()=>{
    console.log('second');
},0); //1000ms delay
console.log('three');

//Function
let func1 = ()=>{
    console.log('func1 is starting');
    func2();
    console.log('func1 is ending');
}

let func2 = () =>{
    setTimeout(() => console.log('func2 is starting'),0);
}
func1();

//SetInterval simlar to settimeout

