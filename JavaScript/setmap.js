let set = new Set();
let array = new Array();
set.add(5);
set.add("Swagat");
set.add("swagat");

console.log(set);
console.log(set.size);

//Generating random values and ceiling them
for(let i = 1;i<=20;i++){
    let num = Math.ceil(Math.random()*100);
    set.add(num);
    array.push(num);
}

//deleting the value from set
set.delete(2);
console.log(set);
console.log(array);