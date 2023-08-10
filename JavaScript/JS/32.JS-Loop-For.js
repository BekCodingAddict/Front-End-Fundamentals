//JavaScript For Loop

const car=['Tayota','BMW','Mers','Volvo'];
console.log('Type:'+typeof car+'\n car:'+car);
for (let i=0;i<car.length;i++){
    console.log('car['+i+']='+car[i]+';');
}

//ou can initiate many values in expression 1 (separated by comma):
for (let i=0, len=car.length,text="Hello?";i<len;i++){
    console.log('len='+len+" text="+text);
}

//The For In Loop
const person={fname:'Jaloli',lname:'Jumanov',age:26};
let txt="";
for (let x in person){
    console.log('person.'+x+'='+person[x]+';');
    txt+=person[x]+'';
}
console.log('txt='+txt);

//The JavaScript for in statement can also loop over the properties of an Array:
const numbers=[45,4,9,16,25];
let text="";
for(let x in numbers){
    text+=numbers[x];
    text+=',';

}

console.log('text:'+text);

let txt2="";
numbers.forEach(myfunction);
function myfunction(value,index,array){
    txt2+=value;
    txt2+=",";
}
console.log('txt2='+txt2);