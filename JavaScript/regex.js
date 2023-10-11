var a = "IN0711";

var regex= /IN/g;
if(regex.test(a)){
    console.log("Matching");
}
else{
    console.log(false);
}

var res = new RegExp("IN","i");
console.log(res.test(a));

//Complex Pattern Match
var a = /[^A-Y]Swagat/;
var z = "ZSwagat";
console.log(a.test(z));
z = "ASwagat";
console.log(a.test(z));

//Powerful Pattern Matching
z = "9954161228abc"
var a = /[6-9][0-9]{9}/
console.log(a.test(z));
a = /^[6-9][0-9]{9}^/
console.log(a.test(z));

//Using Escape Sequences
var a = /^[6-9]\d{9}^/  //\d stands for digits [0-9]
console.log(a.test(z));