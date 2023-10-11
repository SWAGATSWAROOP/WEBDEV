let nums = ["a",1,2];
// console.log(nums[3]);
nums[3] = 4;
// console.log(nums[3]);
// console.log(nums);

console.log(nums.push(1)); //prints length after pushing
console.log(nums.pop()); //prints the value
console.log(nums);

nums.shift(); //removes value at start
console.log(nums);

nums.unshift("q");
console.log(nums);

nums[10] = "a";

//for of loop
for(let num of nums){
    console.log(num);
}

//for in loop
for(let i in nums){
    console.log(nums[i]);
}

//Not recomended uses space
// delete nums[2];

nums.splice(1,2);
console.log(nums);

//Internal Loop
nums.forEach(
    (num) =>{
        //your logic
        console.log(num);
    } 
);

let values = [1,2,4,56,7,8,8];
// //printing only even values
// //using for each only
values.forEach(
    function (num){
        if(num%2 === 0)
            console.log(num);
    }
);

//Filters
//But we ccan use arrow as well as filter functions to filter out the values
values.filter( num => num%2 === 0 ).forEach(num => console.log(num));

//Map
//Now lets say we want to double and print the value
//Purpose of map with change the value
//No permanent change in the value 
values.filter( num => num%2===0).map(num => num*2).forEach(num => console.log(num));

//Reduce
let su = values.reduce((sum,num) => sum+num,0);
console.log(su);

//Array Structuring
let c = 1;
let d = 2;
let m = [c,d];

//Array Destructuring
let [k,l,z,x] = values;
console.log(x);

//Now using rest parameter
let [o,w,...v] = values;
console.log(v); //Gives array of values

string1 = "Swagat Aryan Shiv Sarthak Subrat AnkitC AnkitK";
let [g,...h] = string1.split(' ');
console.log(g,h); 

//Rest
let swagat = (a,b,...nums) => 
{
    let result = a+b;
    for(let num of nums){
        result += num;
    }
    return result;
}

let res = swagat(1,2,3,4,5,6,7,8,9,10); 
console.log(res);

//Spread Operator
function Aryan(a,b,c,d){
    return a+b+c+d;
}

let result = Aryan(...values); //... When used in function passing then its values
console.log(result);

//new way of declaring an array
let va = new Array();
va = [1,2,3,4,5];

//for each with index value
va.forEach(
    (lo,oq) => {
        console.log(lo,oq);
    }
)