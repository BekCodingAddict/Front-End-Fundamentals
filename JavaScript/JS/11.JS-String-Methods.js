//JavaScript String Methods

let text="Jumanov Jaloliddin!";
console.log("Lenght:"+text.length);

let fruits="Apple, Banana, Kiwi";
let part=text.slice(7,13);
console.log("Part :"+part);

// Omitting Second parametr
part=text.slice(7);
console.log("Part :"+part);

//If a parameter is negative, 
//the position is counted from the end of the string:
part=text.slice(-15);
console.log("Part :"+part);

//This example slices out a portion of a string from position -12 to position -6:
part=text.slice(-12, -6);
console.log("Part :"+part);

//JavaScript String substring()
part=fruits.substring(7,13);
console.log("Part:"+part);

part=fruits.substring(7);
console.log("Part:"+part);

//JavaScript String substr()
part=fruits.substr(7,7);
console.log("Part="+part);

part=fruits.substr(7);
console.log("Part="+part);

//negative parametr
part=fruits.substr(-4);
console.log("Part="+part);

let str="Pleace notice that:";
let newStr=str.replace("notice","Remember");
console.log("NewStr="+newStr);

// Replace() casesensetive 
str="Pleace notice that:";
newStr=str.replace("NOTICE","Remember");
console.log("NewStr="+newStr);

//ReplaceAll()
text= "I love cats. Cats are very easy to love. Cats are very popular.";
text=text.replaceAll('Cats','Dogs');
console.log('text='+text);
text=text.replaceAll('cats','dogs');
console.log('text='+text);

//Converting to Upper and Lower Case

str="Hello World";
str=str.toUpperCase();
console.log('str='+str);

//LowerCase
str=str.toLowerCase();
console.log('str='+str);

// String concat()
let text1="Hello";
let text2="World";
let text3=text1.concat(" ",text2);
console.log('text3='+text3);

text3=text1+" "+text2;
console.log('text3='+text3);

text="       Hello World!     ";
text=text.trim();
console.log('text='+text);

text="      Hello World!";
text=text.trimStart();
console.log('text='+text);

text="5";
text=text.padStart(4,"0");
console.log('text='+text);

text="5";
text=text.padEnd(4,"0");
console.log('text='+text);

//String charAt();
text="Hello World";
let char=text.charAt(0);
console.log('char='+char);

char=text.charCodeAt(1);
console.log('char='+char);

//Property Access
char=text[4];
console.log('char='+char);

str="a,b,c,d,e";
const myArray=str.split(",");
console.log("MyArray="+myArray[0]);