//JavaScript Object Accessors

const person={
    fristName:"John",
    lastName:"Doe",
    language:"Eng",
    get lang(){
        return this.language;
    },
    set lang(lang){
        this.language=lang;
    }
}

const Show=(x)=>{
    console.log('Result: '+x);
}

Show(person.lang);

person.lang="Korean";
Show(person.lang);


//JavaScript Object Constructors
function Person(frist,last,age,isMarried){
    this.fristName=frist;
    this.lastName=last;
    this.age=age;
    this.isMarried=isMarried;
    this.fullName=function () {
        return this.fristName+" "+this.lastName;
    };
}

Show(Person);

const John=new Person('John','Doe',29,true);
console.table(John);
Person.nationality="English";
John.hasChildren=()=>{
    return John.age>=30?true:false;
}


Show(John.hasChildren());
Show(John.fullName());