class Person{
    constructor(name,age,c,salary=10){
        this.name = name;
        this.age = age;
        this.c = c;
        this.salary = salary;
    }

    greet(){
        console.log(`Hello ${this.name}`);
        console.log(this.salary);
    }
}

let Swagat = new Person("Swagat");
Swagat.greet();

//Inheritance
class student extends Person{
    constructor(Grade='A'){
        super();
        this.Grade = 'B';
    }
}

let Munu = new student("Swagat");
Munu.greet();

//For specifying any datatype we can have default value for the variables in the constructor

class Car{
    constructor(name,brand,com,total_sales){
        this.name = name;
        this.brand = brand;
        this.com = com;
        this.total_sales = total_sales;
    }

    greet(){
        console.log(this.com);
    }
}

class child extends Car{
    constructor(name,brand,com,total_sales,engine,transmission,suspension,seating_capacity,price,yol){
        super(name,brand,com,total_sales);
        this.engine = engine;
        this.transmission = transmission;
        this.brand = suspension;
        this.seating_capacity = seating_capacity;
        this.total_sales = price;
        this.yol = yol;
        
    }

    greet(){
        console.log(this.name);
        super.greet(); //Calling Parent Function
    }
}

let Audi = new child("Audi","Audi",23,4,5,7,75,7,5,0,4);
Audi.greet();

class Swaroop{
    constructor(name,c){ //
        this.name = name;
        this.c = c;
        this.occupation = "java dev";
    }

    greet(){
        console.log(`My name is Swagat ${this.name} and ${this.c} and ${this.occupation}`);
    }
}

class Parida extends Swaroop{
    constructor(name,c){
        super(name,c);
        this.occupation = "FullStack WebDev";
    }

    greet(){  //Function Overiding
        console.log("My name is swagat.");
    }
}

let S = new Parida("Swagat",12);
S.greet();
