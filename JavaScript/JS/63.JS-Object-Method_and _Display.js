//JavaScript Object Methods

const student={
    fristName:"John",
    lastName:"Doe",
    id:201012,
    fullName: function(){
        return this.fristName+" "+this.lastName;
    }
};

let Name=student.fullName();

const Show=(x)=>{ console.log('Result: '+x); };
Show(Name);

student.fullDate=function() { return this.lastName+" "+this.fristName+"\n"+this.id;};
let fulldate=student.fullDate();
Show(fulldate);

student.name=function (){
    return( this.fristName+" "+this.lastName).toUpperCase();
}

Show(student.name());

//JavaScript Display Objects

//Displaying the Object in a Loop
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

let text='';
for (let x in person){
    text+=person[x];
}

Show(text);

const myArr=Object.values(person);
Show(myArr+" type is "+typeof myArr);
console.table(myArr);
console.table(student);

let mystr=JSON.stringify(person);
Show(mystr);

student.fristName=student.fristName.toString();

text=JSON.stringify(student);

Show(text);

const newArr=[10,30,20,40,50];
text="";
text=JSON.stringify(newArr);
Show(text);