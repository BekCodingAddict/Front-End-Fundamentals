let x="John Doe";

// let x=0; Car not redeclarate

// with var you can
var y="John Doe";
var y=0;

{
    let a=2;
    var b=4;
    console.log("Inside block: a="+a+"/n"+"b="+b+".");
}

console.log("Inside block: a="+a+"/n"+"b="+b+".");
// out put like this: 1.JS-let.js:15  Uncaught ReferenceError: a is not defined

carName="Audi";
var carName;

document.getElementById('demo2').innerHTML="carName="+carName+".";
