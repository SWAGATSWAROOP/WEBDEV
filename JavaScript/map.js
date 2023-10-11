let map = new Map();
map.set("Swagat",21);
map.set("Aryan",17);

console.log(map);
console.log(map.keys());
console.log(map.values()); 

//For each loop in map
//In for each values come first and keys come second
map.forEach((k,v) =>{
    console.log(v,k);
})