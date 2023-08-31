//JavaScript Common Mistakes
//Accidentally Using the Assignment Operator
let x=0;
if(x==10) console.log('True!');

//This if statement returns true (maybe not as expected), because 10 is true:
if(x=10) console.log('True!');
//This if statement returns false (maybe not as expected), because 0 is false:
if(x=0) console.log('True!');
x=10;
let y="10";
if(x==y)console.log('True!');
//In strict comparison, data type does matter. This if statement returns false:

let result=(x===y)? "true":"false";
console.log('result:'+result);

switch(x){
    case 10: console.log('True!');
}

switch(x){
    case "10": console.log('True!');
    default :  console.log('False!');
 
}
//Misunderstanding Floats
let z=0.1+0.2;
console.log('z:'+z);
z=(0.1*10+0.2*10)/10;
console.log('z:'+z);

let hello="hello \
world";

//Accessing Arrays with Named Indexes
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;       // person.length will return 3
person[0];           // person[0] will return "John"

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;      // person.length will return 0
// person[0];          // person[0] will return undefined

//Undefined is Not Null
result= (typeof myObj === "undefined") ? "true":"false";
console.log('result:'+result);
result= (typeof myObj === null) ? "true":"false";
console.log('result:'+result);
// result=(myObj !== null && typeof myObj !== "undefined")  ? "true":"false";
// console.log('result:'+result);
// Because of this, you must test for not undefined before you can test for not null
result =(typeof myObj !== "undefined" && myObj !== null) ? "true":"false";
console.log('result:'+result);