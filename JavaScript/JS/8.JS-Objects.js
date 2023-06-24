
const car={type:"Fiat",model:"500", color:"white"};
console.log("Car:"+car);
console.log("Car type: "+car.type+" Car Model:"+car.model+" Car Color:"+car.color);

//Spaces and line breaks are not important. An object definition can span multiple lines:
const person={
    fristName:"Jaloliddin",
    lastName:"Jumanov",
    age:50,
    married:false
};

person.fristName="Otabek";
person["lastName"]="Sotvoldiev";
console.log("FristName is "+person.fristName+" LastName is "+person.lastName);


const student={
    fistName: "Jaloliddin",
    lastName:"Jumanov",
    id:20101060,
    fullName: function (){
        return this.fistName+" "+this.lastName;
    }
};

let obj=student.fullName();
console.log("FristName is "+student.fistName+" LastName is "+student.lastName+" Id: "+student.id+", FullName is "+obj);
