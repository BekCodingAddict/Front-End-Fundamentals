//ECMAScript 2021

let text = "I love cats. Cats are very easy to love. Cats are very popular.";
text=text.replaceAll('Cats','Dogs');

const Show=(x)=>{ console.log('Result: '+x);};
Show(text);

text=text.replaceAll(/Cats/g,"Dogs");
text=text.replaceAll(/cats/g,"dogs");
Show(text);

const num=1_000_000_000;
const num2=1000000000;
Show((num===num2));

//ES2022 intoduced the array method at():
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
Show(fruit);
fruit = fruits[2];
Show(fruit);

const name = "W3Schools";
let letter = name.at(2);
Show(letter);
letter = name[2];
Show(letter);