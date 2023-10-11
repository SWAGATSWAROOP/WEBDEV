var a = Symbol("Alien");
var b = Symbol("Alien");

var c = "1";
var d = 1;
console.log(c == d); //It compares only value
console.log(c === d); //It compares data type also
console.log(a === b); //It will consider every value as different

console.log(typeof a);
console.log(typeof d);

let age = Symbol("age"); 

let user = {
    name:"Swagat",
    qualifiaction:"BE",
    [age] : 28 // Square bracket because age type is symbol

};

console.log(user);
console.log(user.name);
console.log(user.age); //Undefined
console.log(user[age]); //If the type of data is symbol then we have to use square bracket

//We will Not get symbol
for(let key in user){
    console.log(key);
}

console.log(JSON.stringify(user)); //Object to json conversion
