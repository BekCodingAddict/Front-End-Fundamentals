// JavaScript Type Conversion


//Converting Strings to Numbers
let num1='3.14';
let num2='  ';
let num3="";
let num4='99 98';
let num5="Jaloli";
let num6=" Jaloli98";

console.log('num1:'+Number(num1)+' type:'+typeof num1);
console.log('num2:'+Number(num2)+' type:'+typeof num2);
console.log('num3:'+Number(num3)+' type:'+typeof num3);
console.log('num4:'+Number(num4)+' type:'+typeof num4);
console.log('num5:'+Number(num5)+' type:'+typeof num5);
console.log('num6:'+Number(num6)+' type:'+typeof num6);

//The Unary + Operator
let y='5';
console.log('y:'+y+' type:'+typeof y);
let x=+y;
console.log('x:'+x+' type:'+typeof x);

//If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):
let a="John";
console.log('a:'+a+' type:'+typeof a);
let b=+a;
console.log('b:'+b+' type:'+typeof b);

//Converting Numbers to Strings
//The global method String() can convert numbers to strings.
x=123;
console.log('x:'+String(x)+' type:'+typeof x);
console.log('12.3:'+String(12.3)+' type:'+typeof 12.3);
console.log('100+30:'+String(100+30)+' type:'+typeof 100+30);
//e global method Number() can be used to convert dates to numbers.
let d=new Date();
console.log('d:'+d+' type:'+typeof d+' number:'+Number(d));
//The date method getTime() does the same.
d=new Date();
d.getTime();
console.log('d:'+d+' type:'+typeof d+' number:'+Number(d));
//Converting Dates to Strings
//The global method String() can convert dates to strings.
console.log('Date:'+String(Date()));

//The Date method toString() does the same.
console.log('Date: '+Date().toString());