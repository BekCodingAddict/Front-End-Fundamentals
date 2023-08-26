//JavaScript Classes
class Car{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
    age(){
        const date=new Date();
        return date.getFullYear()-this.year;
    }
    //You can send parameters to Class methods:
    /* age(x) {
    return x - this.year; */
}

const myCar1=new Car('BMW',2018);
const myCar2=new Car('Audi',2020);

console.log('myCar1:'+myCar1);
console.log('Car name is '+myCar1.name+'\n car year is '+myCar1.year+'\n car age is '+myCar1.age());
