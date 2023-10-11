var a = "iNeuron is located is Banglore";
console.log(a.length);
a = a.toUpperCase();
console.log(a);
a = a.toLowerCase();
console.log(a);

//Searching is case sensitive
console.log(a.includes("is"));
//if some part of the string then also we will get true

//If my entire string is ending with
console.log(a.endsWith("e"));

//If any string start with
console.log(a.startsWith("N"));

//Searching index
console.log(a.search('is'));

//finding match of all values present through regex
console.log(a.match(/is/g)); //here g stands for global

//from gives us the character corresponding to it
console.log(String.fromCharCode(65));

//charCodeAt gives ascii value at the index
console.log(a.charCodeAt(1));

//string concat even we can multiple strings
var l = a.concat(" Munu"," Swagat");
console.log(l);

//trim the space from start and last
var a = " Javascript Swagat Javascript";
console.log(a);
console.log(a.trim());

//slice method
console.log(a.slice(2,5));

//Substring method
console.log(a.substring(2,5));

//substr method
console.log(a.substr(2,5));

//slice method it circularly rotates
console.log(a.slice(3,-1));

//Splitting on the basis of a string and return an array
console.log(a.split(' '));

//to string coverts array to string
let z = 10;
var c = z.toString();
console.log(z+20);
console.log(c+10);

//replacing with string
var k = a.replace("Javascript","Bengaluru");
console.log(k);

//Even we can replace with regex
var k = a.replace(/Javascript/g,"Bengaluru");
console.log(k);
