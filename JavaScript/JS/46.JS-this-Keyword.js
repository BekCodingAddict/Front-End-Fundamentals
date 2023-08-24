//The JavaScript this Keyword

const student={
    fristName:"Otabek",
    lastName:"Sotvoldiev",
    ID:20101256,
    fullName: function(){
        return this.fristName+" "+this.lastName;
    }
};

let x=this;
console.log('x:'+x);

{
    'use strict';
    let x=this;
    console.log('x:'+x);

}

//In a function, the global object is the default binding for this.
function func(){
    return this;
}

console.log('func:'+func());

const student2={
    fristName:'Jaloli',
    lastName:'Jumanov',
};
//The example below calls student.fullName with person2 as an argument,
// this refers to student2, even if fullName is a method of person1:
console.log('student1:'+student.fullName.call(student2));
//Function Borrowing
const member={
    fristName:"Ismoil",
    lastName:"Mamatkulov",
}

let fullName=student.fullName.bind(member);
console.log('member:'+fullName());