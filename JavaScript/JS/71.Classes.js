class Student{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    showInfo(){
        console.log('Student Name:'+this.name);
        console.log('Student ID:'+this.id);
    }
}

const Jaloli=new Student('Jaloli',201010);
Jaloli.showInfo();

class Major extends Student {
    constructor(major,name){
        super(name);
        this.major=major
    }
    showMajorInfo(){
        console.log('Student Name: '+this.name+
        "\n"+"Student Major: "+this.major);
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name=name;
    }

}

const JaloliMajor=new Major('English Literature','Jaloli');
JaloliMajor.showMajorInfo();
JaloliMajor.setName='Jaloliddin';

const show=(x)=>{console.log('Result:'+x)};
show(JaloliMajor.getName);
JaloliMajor.showMajorInfo();

class Fruits{
    constructor(name){
        this.name=name;
    }
    static sayHello(obj){
        return "Hello from "+obj.name+"!";
    }
}

const apple=new Fruits('Apple');
show(Fruits.sayHello(apple));