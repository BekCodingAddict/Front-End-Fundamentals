//JavaScript Arrays
const car=['SaaB','Volvo','BMW'];
console.log('car='+car+" type of car is "+typeof car);
///Spaces and line breaks are not important. A declaration can span multiple lines:
const fruits=[
    'apple',
    'orange',
    'banana'
];
console.log('fruit='+fruits);
const prolan=[];
prolan[0]='C++';
prolan[1]='JavaScript';
prolan[2]='Python';
prolan[3]='Java';
console.log('prolan='+prolan);

//Accessing Array Elements
let car1=car[0];
console.log('car1='+car1);

//Changing an Array Element
car[0]='Mers';
console.log('car='+car);

let str=fruits.toString();
console.log('str='+str+' type of str is '+typeof str);

const cars=car;
console.log('cars='+cars+' type of cars is '+typeof cars);

function myFunction(){
    console.log('This is myFunctions');
};

const newArr=[];
newArr[0]=Date.now;
newArr[1]=myFunction();
newArr[2]=cars;

console.log('newArray='+newArr);

let lenght=cars.length;
console.log('lenght='+lenght);
console.log('cort='+cars.sort());

//Accessing the Last Array Element
console.log("last element="+fruits[fruits.length-1]);

//Looping Array Elements
for (let i=0;i<prolan.length;i++){
    console.log('programming language['+i+']'+"="+prolan[i]);
}

//Adding Array Elements
fruits.push('Lemon');
console.log('fruits='+fruits);
fruits[fruits.length]='Mango';
console.log('fruits='+fruits);
fruits[8]='Melon';
console.log('fruits='+fruits);

//Associative Arrays
const person=[];
person[0]='John';
person[1]='Doe';
person[2]=46;
console.log('person[0]='+person[0]+"lenght="+person.length);

const points=[10,20,30,40,50];
const points2=new Array(10,20,30,40,50);
console.log('points='+points+' type of points is'+typeof points+'\n points2='+points2+' type of points2 is '+typeof points2);

const arr=[40];
const arr2=new Array(40);
console.log('arr='+arr+'\n arr2='+arr2);

console.log('fruit is array?='+Array.isArray(fruits));
console.log('Is points an Array?='+points instanceof Array);

let num=10;
console.log('is num a number'+ num instanceof Number);