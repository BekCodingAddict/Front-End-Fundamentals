//ECMAScript 2020


let Show=(x)=>{ console.log('Result: '+x);};

let x = 999999999999999;
let y = 9999999999999999n; // too big

Show(x);
Show(y);
Show(typeof y)
let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator=text.matchAll('Cats');
Show(Array.from(iterator));
 
let result=text.matchAll(/Cats/g);
Show(Array.from(result));

result=text.matchAll(/Cats/gi);
Show(Array.from(result));


//The ?? operator returns the first argument if it is not nullish (null or undefined).

let name=null;
let txt='missing!';
let res= name ?? text;
console.log('res: '+res);

const car = {type:"Fiat", model:"500", color:"white"};
name = car?.name;
Show(name);

//The Logical AND Assignment Operator is used between two values.

let a=10;
a &&=5;
Show(a);

let b=10;
b||=5;
Show(b);

let c;
c ??=5;
Show(c);