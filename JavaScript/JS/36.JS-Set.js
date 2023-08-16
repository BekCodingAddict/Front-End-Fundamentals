//JavaScript Sets

//How to Create a Set
const letters=new Set("A","B","C");

console.log('set:'+letters);

const newset=new Set();

newset.add('1');
newset.add('2');
newset.add('3');

console.log('set:'+newset.size);
let num="4";
newset.add(num);

console.log('set:'+newset.size);
newset.add('1');
newset.add('2');
newset.add('3');
newset.add('4');
newset.add('2');
newset.add('1');
console.log('set:'+newset.size);

//The forEach() Method
let text="";
newset.forEach(function(value){ text+=value+","; });
console.log('text:'+text);
newset.values();
text="";

for (let x  of newset.values()){
    text+=x+',';
}
console.log('text:'+text);