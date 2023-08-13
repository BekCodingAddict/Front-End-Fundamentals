//JavaScript Iterables
//Iterating Over a String
const name='Otabek';
let text="";
for (x of name){
    text+=x+",";
}
console.log('text:'+text);
const fruits=['Banana','Apple','Straberry'];
text="";
let count=0;
for (const x of fruits){
    count++;
    text+=count+'.'+x+'\n';
}
console.log('text:'+text);

//Iterating Over a Map
const ProgLan=new Map([
    ['JavaScript',2],
    ['Python',1],
    ['Java',3]
]);

text="";
count=0;
for (const x of ProgLan){
    count++;
    text+=count+'.'+x+'\n';
}
console.log('text:'+text);