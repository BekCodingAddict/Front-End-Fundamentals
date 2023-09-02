var str="Hello World";
console.log('str: '+str.charAt(6));

//ES5 allows property access on strings:
console.log('str: '+str[6]);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('Fruits is array? : '+Array.isArray(fruits));

// /Array forEach()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunc);
function myFunc(value){
    txt+=value+",";
}
console.log('txt:'+txt);

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);
function myFunction(value) {
    return value * 2;
  }
console.log('number2: '+numbers2);

//Array filter()
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunc2);

function myFunc2(value) {
    return value > 18;
  }

  console.log('over18: '+over18)

  var numbers1 = [45, 4, 9, 16, 25];
  var sum = numbers1.reduce(myFunc3);
  function myFunc3(total, value) {
    return total + value;
  }
numbers1 = [45, 4, 9, 16, 24];
  console.log('sum :'+sum)
  sum=numbers1.reduceRight(myFunc3);
  console.log('sum :'+sum)

  //
  var allover18=over18.every(myFunc2);
  console.log('allover 18:'+allover18);

  //Array some()
  numbers = [45, 4, 9, 16, 25];
  var allOver18 = numbers.some(myFunction2);
  function myFunction2(value) {
    return value > 18;
  }
  console.log('Array Some: '+allOver18);

  //Array indexOf()
  var a=fruits.indexOf('Apple');
  console.log('a: '+a)

  var text='{"name":"John", "age":30, "city":"New York"}';
  const obj=JSON.parse(text);
  console.log('obj:'+obj.name+ " type :"+ typeof obj);

  var str=JSON.stringify(obj);
  console.log('str:'+str+" type: "+typeof str);

  //Date.now()
  var timeinMSs=Date.now();
  console.log('timeMilsec: '+timeinMSs);

  var date=new Date();
  let objjson=date.toJSON();
  console.log('objsjon: '+objjson+' type: '+typeof objjson);

  const student ={
    fullName:"No",
    ID:null,
    setName(name){
        this.fullName=name;
    },
    getfullName(){
        return this.fullName;
    },
    setID(num){
        this.ID=num;
    },
    getID(){
        return this.ID;
    }
  }

  console.log(student.fullName,student.ID);
  student.setName("Otabek");
  student.setID(20101256);
  console.log(student.getfullName(),student.getID());
  console.log(student.fullName,student.ID);


  var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
  };

  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : true,
    configurable : true
  });
  text=""

  for (var x in person){
    text+=person[x]+" ,";
  }

  console.log('text: '+text);