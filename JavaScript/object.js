//Initailization of objects 1
let point = {x:0,y:0}
let p2 = {x: point.x,y:point.y+1}
console.log(p2)

let book ={
    "title":"javascript",
    "author":"John",
    "year":2018,
    "num_copies":1000
}

console.log(book.title)

let book1 ={
    "title":"javascript",
    "author":{
        "firstname": "Swagat",
        "LastName": "Parida"
    },
    "year":2018,
    "num_copies":1000
}

console.log(book1);
console.log(book1.author.firstname);

//Initialization Of objects by new

let book3 = new Object();
book3.title = "Swagat";
console.log(book3);

//3rd way of creating object
let obj1 = Object.create({x:1,y:2});
let o2 = obj1.x + obj1.y;
console.log(o2);

let student = new Object();
student.name = "Swagat";
student.age = 20;
student.subjects = ["Maths","Physics","Chemistry"];
student.marks = [90,99,100];

console.log(student);

//Constructor
function S(name,dob,y){
    this.name = name;
    this.dob = dob;
    this.y = y;
}

let Swagat = new S("Swagat","04/04/2003",1); //Creating a object of S type
let z = new S();
z.name = "Swagat";
console.log(z.name);
console.log(Swagat);

//functional inheritance
function animal(value){
    var obj = {};
    obj.name = value.name;
    return obj;
}

//Derived class
function dog(value){
    var a = animal(value);
    a.greet = function(){
        return `Hello My name is ${a.name}`;
    };
    return a;
}

var mycutedog = dog({name : "M"});
console.log(mycutedog.greet());

//Static Methods:- It can used in the scenario where we dont want to create object directly
class P{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    static Create(gender){
        let name = gender == "male" ? "Swagat" : "Sarthak";
        return new P(name);
    }
}

//Not Create an object But with name directly
let name_gender = P.Create("male");
console.log(name_gender);

let Sp = P.Create("female");
console.log(Sp);

let Sarthak = new P("Sarthak");
console.log(Sarthak.getName());
console.log(name_gender.getName());

