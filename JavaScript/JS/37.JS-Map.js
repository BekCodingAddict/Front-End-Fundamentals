//JavaScript Maps

//How to Create a Map
const fruits=new Map([
    ['Apples',500],
    ['Bananas',300],
    ['Oranges',200]
]);
console.log('fruits:'+fruits+' Size:'+fruits.size);

//The set() Method
const Fruits=new Map();

Fruits.set('Apples',1000);
Fruits.set('Bananas',500);
Fruits.set('Oranges',250);

console.log('fruits:'+Fruits+' Size:'+Fruits.size);

Fruits.set('Apples',800);
console.log('Key:'+Fruits.get("Apples"));

Fruits.delete('Apples');
console.log('fruits:'+Fruits+' Size:'+Fruits.size);

console.log('Fruit has ?:'+Fruits.has("Apples"));
console.log('Fruit has ?:'+Fruits.has("Bananas"));

//The forEach() Method
let text="";
Fruits.forEach(function(value,key){ text+=key+'='+value+'\n';});

console.log('Text:'+text);

//The entries() Method
text="";
for (const x of Fruits.entries()){
    text+=x+'\n';
}

console.log('text:'+text);