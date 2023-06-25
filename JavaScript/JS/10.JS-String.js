// JS String

let text1="John Doe";

//You can use single or double quotes:
console.log("Text1="+text1);
text1='John Doe';
console.log("Text1="+text1);

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
let text="It's Alright!";
console.log("text="+text);
text="He is called 'Cebastian'";
console.log("text="+text);

//String Length
let lenght=text.length;
console.log("lemght="+lenght);

text="All will \'be\' fine!";
console.log("text="+text);
text="All will \"be\" fine!";
console.log("text="+text);
text="All will \\be\\ fine!";
console.log("text="+text);

text="All will be \b fine!";
console.log("text="+text);

text="All will be \f fine!";
console.log("text="+text);

text="All will be \r fine!";
console.log("text="+text);


text="All will be \tfine!";
console.log("text="+text);

text="All will be \v fine!";
console.log("text="+text);
 

let obj=new String("John");
text='John';
console.log('text='+typeof(text)+" Obj="+typeof(obj));
console.log((text===obj));
console.log((text==obj));

let obj2=new String("John");
console.log("obj==obj2="+(obj===obj2));
console.log("obj==obj2="+(obj==obj2));
