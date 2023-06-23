//Numbers
let lenght=15;
let weight=7.5;
 
// string
let color ="yellow";
let lastName="Johnson";

//Bolean
let x=true;
let y=false;

//Object
const person ={fristName:"Jhon",lastName:"Doe"};

//Array Object;
const cars=["Volvo","BMV","Tayota"];

//dateObject
const date=new Date('2022-03-25');

//NOTE JavaScript variable can hold any type of date;
console.log('Numbers:{'+"Lenght:"+lenght+"weight:"+weight+"}");
console.log("String:{"+"color:"+color+"LastName:"+lastName+"}");
console.log("Bolean:{"+"x="+x+", y="+y+"}");
console.log("Object:{"+cars+"}");
console.log("Date:{"+date+"}");

let a=16+"Volvo";
console.log("a="+a);
a="Volvo"+16;
console.log("a="+a);

a=16+4+"Volvo";
console.log("a="+a);
a="Volvo"+16+4;
console.log("a="+a);

a="Volvo"+1.5+2;
console.log("a="+a);

let carName="Volvo XC60";
console.log("CarName:"+carName);
carName='Volvo XC61';
console.log("CarName:"+carName);
//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
let answere="It's alright!";
console.log("Answere:"+answere);
answere="He is called 'Jonny'";
console.log("Answere:"+answere);

let num1=34.00;
console.log("num1="+num1);
let num2=34;
console.log("num2="+num2);

let num3=BigInt(21232323121313111311233332);
console.log("num3="+num3);

//Boleans
x=5
y=5
let z=6;
console.log("x==y="+(x==y));
console.log("x==z="+(x==z));

const fruits=["Apple","Orange","Banana"];
console.log("Fruits="+fruits);

const person2={fristName:"Jaloliddin",lastName:"Jumanov",age:26,married:false};
console.log("Person2="+"FristName is"+person2.fristName+"Age:"+person2.age+"Married:"+person2.married);

console.log(typeof(person2));
console.log(typeof(x));
console.log(typeof(fruits));


let name;
console.log(typeof(name));

let carname="";
console.log(typeof(carname));
