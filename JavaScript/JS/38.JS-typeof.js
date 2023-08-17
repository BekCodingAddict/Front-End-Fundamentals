//JavaScript typeof

console.log('type of "John" :'+typeof 'John');
console.log('type of 3.14 :'+typeof 3.15);
console.log('type of NaN :'+typeof NaN);
console.log('type of false :'+typeof false);
console.log('type of [1,2,3,4] :'+typeof [1,2,3,4]);
console.log('type of {name:John,age:27} :'+typeof {name:'John',age:27});
console.log('type of Date() :'+typeof Date());
console.log('type of function(){} :'+typeof function(){});
console.log('type of mycar :'+typeof mycar);
console.log('type of null:'+typeof null);

//Primitive Data
console.log('type of false :'+typeof false);
console.log('type of "John" :'+typeof 'John');
console.log('type of 3.14 :'+typeof 3.15);
console.log('type of mycar :'+typeof mycar);

//Complex Data
console.log('type of {name:John,age:27} :'+typeof {name:'John',age:27});
console.log('type of [1,2,3,4] :'+typeof [1,2,3,4]);
console.log('type of null:'+typeof null);
console.log('type of function(){} :'+typeof function(){});

//The constructor Property
console.log('type of "John" :'+ 'John'.constructor);
console.log('type of 3.14 :'+ 3.15.constructor);
console.log('type of false :'+ false.constructor);
console.log('type of [1,2,3,4] :'+ [1,2,3,4].constructor);
console.log('type of {name:John,age:27} :'+ {name:'John',age:27}.constructor);
console.log('type of Date() :'+ Date().constructor);
console.log('type of function(){} :'+ function(){}.constructor);

//You can check the constructor property to find out if an object is an Array (contains the word "Array"):

function isArray(myArray){
    return myArray.constructor.toString().indexOf('Array')>-1;
}

const num=['1','2','3'];
console.log('result:'+isArray(num));

//Or even simpler, you can check if the object is an Array function:
function isArray2(myArray){
    return myArray.constructor===Array;
}
console.log('result:'+isArray2(num));

function isDate(mydate){
    return mydate.constructor.toString().indexOf('Date')>-1;
}

const myDate=new Date();
console.log('Result:'+isDate(myDate));
//Or even simpler, you can check if the object is a Date function:
function isDate2(myDate) {
    return myDate.constructor === Date;
  }

  console.log('Result:'+isDate2(myDate));

  let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  person = null;    // Now value is null, but type is still an object

  //You can also empty an object by setting it to undefined:
  let person2= {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person2 = undefined;   // Now both value and type is undefined

//The instanceof Operator
const cars = [1, 2, 3];

console.log(cars instanceof Array);
console.log(cars instanceof Object);
console.log(cars instanceof String);
console.log(cars instanceof Number);

