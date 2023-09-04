//ECMAScript 2016
let x=3;
let z=x**2;
console.log('z: '+z+' coob root: '+Math.cbrt(9));

let SHOW=(x)=>{ console.log('result: '+x);};
SHOW(x);

SHOW(Math.pow(x,2));

//The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.
x=5
x**=2;
SHOW(x);
const fruits = ["Banana", "Orange", "Apple", "Mango"];

SHOW(fruits.includes("Mango"));

//JavaScript String Padding
let text="5";
text=text.padStart(4.0);
SHOW(text);
text=text.padEnd(4.0);
SHOW(text);

const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };

  text=Object.entries(person);
  SHOW(text);

  text=Object.values(person);
  SHOW(text);

async function myDisplay(){
    let myPromise=new Promise(function(myResolve,myReject){
        setTimeout(function(){ myResolve('I Love JS!!!');},3000);
    });
    SHOW(await myPromise);
}
myDisplay();