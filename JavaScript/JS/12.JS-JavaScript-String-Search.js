//JavaScript String Search
let text="Please locate where 'locate' occurs!";
let index=text.indexOf('locate');
console.log('Index='+index);

index=text.lastIndexOf("locate");
console.log('Index='+index);

index=text.lastIndexOf("John");
console.log('Index='+index);

index=text.lastIndexOf("locate",15);
console.log('Index='+index);

//JavaScript String search()
index=text.search('locate');
console.log('Index='+index);

//JavaScript String match()
text = "The rain in SPAIN stays mainly in the plain";
const arr=text.match("ain");
console.log('Lenght of Array is '+arr.length+" Arr is "+arr);

text = "The rain in SPAIN stays mainly in the plain";
const arr2=text.match("ain");
console.log("Lenght of array is "+arr2.length+" Array is "+arr2);

//matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
console.log("Iterator="+Array.from(iterator));

//The includes() method returns true if a string contains a specified value.
text = "Hello world, welcome to the universe.";
let bool=text.includes("world");
console.log("Condition="+bool);

text = "Hello world, welcome to the universe.";
bool=text.includes("world", 12);
console.log("Condition="+bool);

// startsWith() method returns true if a string begins with a specified value.
text = "Hello world, welcome to the universe.";
bool=text.startsWith("Hello");
console.log("Condition="+bool);

text = "Hello world, welcome to the universe.";
bool=text.startsWith("world");
console.log("Condition="+bool);

text = "Hello world, welcome to the universe.";
bool=text.startsWith("world",5);
console.log("Condition="+bool);

text = "Hello world, welcome to the universe.";
bool=text.startsWith("world",6);
console.log("Condition="+bool);

let name="John Doe";
bool=name.endsWith('Doe');
console.log("Condition="+bool);


text = "Hello world, welcome to the universe.";
bool=text.endsWith("world", 11);

console.log("Condition="+bool);