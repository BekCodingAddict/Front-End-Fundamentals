function myfunc(){
    return this;
}

const show=(x)=>{ console.log('Result:'+x)};
show(myfunc());


const student={
    fristName:"Abdusattor",
    lastName:"Mannaboyev",
    fullName:function (){
        return this.fristName+" "+this.lastName;
    }
};


show(student.fristName);

function myFunc(arg1,arg2){
    this.fristName=arg1;
    this.lastName=arg2;
};

const newObj=new myFunc('Abdusattor',"Mannaboy");
show(newObj.fristName);

//The call() Method with Arguments
const student2={
    fullName:function (id,major){
        return this.fristName+" "+this.lastName+', id:'+this.id+' major:'+this.major;
    }
}

const person={
    fristName:"Mamajon",
    lastName:'Abdusattorov'
}

show(student2.fullName.call(person,201012,'IT'));

show(Math.max(1,2,3))

show(Math.max.apply(null,[1,2,3]));

let obj=student.fullName.bind(person);
const person1 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }

  show(person1.display);
  
  let display=person1.display.bind(person1);
  show(display)