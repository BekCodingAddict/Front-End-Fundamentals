

const show=(x)=>{ console.log('Result: '+x);}
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

Person.nationality="English";
show(myFather.nationality);

Person.prototype.nationality="English";
show(myFather.nationality);

Person.prototype.fullName= function(){
    return this.firstName+" "+this.lastName;
}

show(myMother.fullName());