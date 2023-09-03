//Javascript ES6

//Arrow Functions
// ES5
var x = function(x, y) {
    return x * y;
 }
//es6
const xx=(x,y)=>x*y;
console.log('xx: '+xx(5,5));

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log('year:'+year);

const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
console.log(maxValue);

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars){
    text+=x+',';
}

console.log('text:'+text);
let lang="JavaScript";
text="";
for (let x of lang){
    text+=x+'-';
}
console.log('text:'+text);

//Being able to use an Object as a key is an important Map feature.
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ]);

    console.log('fruits:'+fruits.get('apples')+'fruits;'+fruits.keys(300));
//JavaScript Sets

const letters=new Set();
letters.add('a');
letters.add('c');
letters.add('a');
letters.add('b');
console.log('set:'+letters.size);

//Promise Syntax
const myPromise=new Promise(function(myResolve,myReject){
    setTimeout(function(){myResolve('I love JS!!'); },3000);
});

myPromise.then(function(value){
    console.log(value);
})

const person={
    fristName:"John",
    lastName: "Doe",
    age:50,
    Employed: true
}

let id=Symbol('id');
person[id]=20101065;
console.log('person[id]='+person[id]+" person.id:"+person.id);

//Default Parameter Values
function func(x,y=10){
    return x+y;
}
console.log('func(5):'+func(5));
console.log('func(5):'+func(5,5));


//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function sum(...args){
    let sum=0;
    for (let arg of args)sum+=arg;
    return sum;
}
let result=sum(4,9,16,25,29,100,66,77);
console.log('SUM:'+result);

//String.includes()
text = "Hello world, welcome to the universe.";
console.log('result:'+text.includes('world'));

//The startsWith() method returns true if a string begins with a specified value, otherwise false:
text = "Hello world, welcome to the universe.";
console.log('result:'+text.startsWith("Hello"));

//The endsWith() method returns true if a string ends with a specified value, otherwise false:
text='john doe';
console.log('result:'+text.endsWith('doe'));

const myArr=Array.from('ABCDEFG');
console.log('myArr:'+myArr+' type: '+typeof myArr);

 const numbers2 = [4, 9, 16, 25, 29];
let first = numbers2.find(myFunction);
function myFunction(value, index, array) {
    return value > 18;
  }
console.log('frist:'+first);
console.log('is integer:'+Number.isInteger(10.6));
console.log('is integer:'+Number.isSafeInteger(211212121223233333333121));

console.log('10/0: '+isFinite(10/0));
console.log('10/0 : '+isFinite(10/1));

console.log('is nan: '+isNaN('Hello'));

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const f=fruits2.entries();

for (let x of f){
    console.log(x);
}