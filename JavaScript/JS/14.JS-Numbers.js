//JavaScript Numbers
let x = 3.14;    // A number with decimals
let y = 3;  

console.log('x='+x+' y='+y);

x = 999999999999999;   // x will be 999999999999999
y = 9999999999999999;  // y will be 10000000000000000
console.log('x='+x+' y='+y);

x = 0.2 + 0.1;
console.log('x='+x);

x = (0.2 * 10 + 0.1 * 10) / 10;
console.log('x='+x);

//Adding Numbers and Strings
x=20;
y=10;
let sum=x+y;
console.log("sum="+sum);

x="20";
y="10";
sum=x+y;
console.log("sum="+sum);

x="100";
y="10";
sum=x/y;
console.log("sum="+sum);

sum=x*y;
console.log("sum="+sum);

sum=x-y;
console.log("sum="+sum);

//this will not workl;
sum=x+y;
console.log("sum="+sum);

sum=100/"Apple";
console.log("sum="+sum);
let bool=isNaN(sum);
console.log("Bool="+bool);

//Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
x=NaN;
y=10;
sum=x+y;
console.log("sum="+sum);

x=NaN;
y='5';
sum=x+y;
console.log("sum="+sum);

console.log("typeof result:"+typeof(x));

let myNum=2;
let txt="";
while(myNum!=Infinity){
    myNum=myNum*myNum;
    txt=txt+myNum+"\n";
}

console.log("result: "+txt);

x=2/0;
y=-2/0;
console.log("x="+x+" y="+y);

console.log("typeof x is "+typeof(x)+" typeof y is "+typeof(y));

x=0xff;
console.log("typeof x is "+x);

myNum=32;
console.log('Hexadecimal (base 36):'+myNum.toString(36));
console.log('Duotrigestimal (base 32):'+myNum.toString(32));
console.log('Hexadecimal (base 16):'+myNum.toString(16));
console.log('Hexadecimal (base 12):'+myNum.toString(12));
console.log('Hexadecimal (base 10):'+myNum.toString(10));
console.log('Hexadecimal (base 8):'+myNum.toString(8));
console.log('Hexadecimal (base 2):'+myNum.toString(2));

//numbers can also be defined as objects with the keyword new:
let num=new Number(123);
let num2=123;
console.log('typeof num='+typeof(num)+" typeof num2="+typeof(num2));
console.log("num==num2="+(num==num2));
console.log("num==num2="+(num===num2));
let num3=new Number(123);
console.log('num2===num3='+(num2===num3));
console.log('num2===num3='+(num2==num3));