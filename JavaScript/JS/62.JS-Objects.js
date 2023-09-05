//JavaScript Objects

//Using an Object Literal
const person={ fristName:"John",lastName:"Doe",age:50,isMarried:true };
const person2={
     fristName:"John",
     lastName:"Doe",
     age:50,
     isMarried:true
     };

const person3={};
person3.fristName="Jaloli";
person3.lastName="Jumanov";
person3.age=26;
person.isMarried=false;


const student=new Object();
student.fristName="John";
student.lastName="Brandem";
student.id=201012;

const x=student;
x.id=201010
console.log('x:'+x+x.fristName+","+x.lastName+student.id);

let major="Computer Science";
student[major];
console.log('major:'+student[major]);

const changeJson=(obj)=>{
     let text="{";
     for (let x in obj){
          text+=obj[x]+","
     }
     text+="}";
     return text;
}
const Show=(x)=>{ console.log('Result:'+x);};
Show(changeJson(person));

student.nationality="UZB";

Show(student.nationality);
delete student.nationality;
Show(student.nationality);

delete student['id'];
Show(student.id);

const newObj={
     fullName:"John Doe",
     age:30,
     languages:{
          JavaScript:true,
          Java:true,
          Python:true,
          Cpp:false
     }
}

Show(newObj.fullName+" is Known JS: "+newObj.languages.JavaScript)
Show('Is known Java:'+newObj.languages['Java']);
Show('Is known C++ :'+newObj['languages']['Cpp']);

const Trading={
     type:"Stock",
     type:'Forex',
     instrument:[
          {name:'USDJPY',price:123.456 },
          {name:'GBPJPY',price:163.456 },
          {name:'EURJPY',price:1563.456 },
     ]
}
let text='';
for (let i in Trading.instrument){
     text+=Trading.instrument[i].name+"\n";
     for (let x in Trading.instrument){
          text+=Trading.instrument[i].price+"\n";
     }
}

Show(text);