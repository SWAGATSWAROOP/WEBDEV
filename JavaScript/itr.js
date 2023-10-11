var a = ["JavaScript","React","Node.js","BlockChain"];

for(let i = 0;i<a.length;i++){
    console.log(a[i]); //It is traversing and getting the value
}

let x = a[Symbol.iterator]();
console.log(typeof a[Symbol.iterator]());

console.log(x);
let z = x.next();
console.log(z);

let f = x.next().value;
console.log(f); 

console.log(x.next().done);
console.log(x.next().value);
console.log(x.next().value);

let na = "Swagat Swaroop Parida";
let g = na[Symbol.iterator]();
let ko = g.next();

while(!ko.done){
    console.log(ko.value);
    ko = g.next();
}

