//JavaScript Comparison and Logical Operators
let age=19;
if(age<18) {
    text="Too young to buy alcohol";
    console.log('Text:'+text);
}

console.log('2<12='+(2<12));
console.log('2<"12"='+(2<"12"));
console.log('2<"John"='+(2<"John"));
console.log('2>"John"='+(2>"John"));
console.log("2'<'John='"+('2'<"John"));
console.log("2'>'John='"+('2'>"John"));
console.log("2'=='John='"+('2'=="John"));

let voteable="";
age=Number(age);
if(isNaN(age)){
    voteable="Input is not number";
    console.log('Voteable:'+voteable);
}else{
    voteable=(age<18)?"Too young!":"Old Enough!";
    console.log('Voteable:'+voteable);
}

//The Nullish Coalescing Operator (??)
let name = null;
let text = "missing";
let result = name ?? text;
console.log('Result:'+result);

//The Optional Chaining Operator (?.)
// Create an object:
const car = {type:"Fiat",name:"Otabek", model:"500", color:"white"};
// Ask for car name:
console.log('Result:'+car?.name);