//JavaScript Array Methods
const fruits=['Banana','Orange','Lemon'];
let size=fruits.length;
console.log('Size of array is '+size);

let str=fruits.toString();
console.log('str='+str+" type of str is "+typeof str);

str=fruits.join(',');
console.log('str='+str+" type of str is "+typeof str);

console.log('fruits='+fruits);
fruits.pop();
console.log('fruits='+fruits);

console.log('fruits='+fruits);
fruits.push('Kiwi');
console.log('fruits='+fruits);
fruits.pop('Banana');
console.log('fruits='+fruits);

fruits.shift();
console.log('fruits='+fruits);
str=fruits.shift();
console.log('str='+str);
str=fruits.unshift('Lemon');
console.log('Fruits='+fruits);
console.log('str='+str);

const car=['BMW','VOLVO','TESLA'];
console.log('Car='+car);
delete car[1];
console.log('Car='+car);

//Merging (Concatenating) Arrays
const proLan1=['C++','C','Java'];
const proLan2=['Python','JavaScript'];
const proLan3=proLan1.concat(proLan2);
console.log('proLan3='+proLan3);

const birlik=[1,2,3,4,5];
const onlik=[10,20,30,40,50];
const yuzlik=[100,200,300,400,500];
const total=birlik.concat(onlik,yuzlik);
console.log('total='+total);

const arr1=['Jaloli','Men','Ismoil'];
const arr2=arr1.concat('Biz');
console.log('arr2='+arr2);

//Flattening an Array
const newArr=[[1,2],[3,4],[5,6]];
const newArr2=newArr.flat();
console.log('newArr='+newArr);

const browser=['chrome','Edge','FireFox','Safari','Opera'];
console.log('browser: '+browser);
browser.splice(3,0,'UC browser','Yandex');
console.log('browser='+browser);
let removed=browser.splice(3,2,'UC browser','Yandex');
console.log('browser='+browser);
console.log('removed='+removed);
browser.splice(0,5);
console.log('browser='+browser);
const num1=[1,2,3,4,5];
const newNum1=num1.slice(1);
console.log('newnum1='+newNum1);

const iphone=['Iphone 11','Iphone11 pro','Iphone 11 pro max'];
console.log('Iphone='+iphone.toString()+' type of iphone is '+typeof iphone.toString());
console.log('Iphone='+iphone.toString()+' type of iphone is '+typeof iphone);