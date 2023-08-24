//JavaScript Hoisting

//JavaScript Declarations are Hoisted
x=5;
elem=x;
console.log('x:'+x+'type is '+typeof x);
console.log('x:'+elem+'type is '+typeof elem);
var x;

var a;
a=10;
console.log('a:'+a);

//Using a let variable before it is declared will result in a ReferenceError.
try{
    carName="BMW";
    console.log('carName:'+carName);
    let carName;
}catch(err){
    console.log('Error:'+err.name);
}

//Using a const variable before it is declared, is a syntax error, so the code will simply not run.

// try {
//     fruit='Banana';
//     console.log('Fruit:'+fruit);
//     const fruit;
// } catch (error) {
//     console.log('Error:'+error.name);
// }
var num1=5;
var num2=10;
console.log('num1:'+num1+'\n'+' num2:'+num2);

var num3=20;
console.log('num3:'+num3+'\n'+' num4:'+num4);
var num4=40;