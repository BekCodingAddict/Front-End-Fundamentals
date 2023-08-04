//JavaScript Booleans
//A JavaScript Boolean represents one of two values: true or false.
console.log('Boolean1:'+Boolean(10>9));


//Everything With a "Value" is True
console.log('Boolean2:'+Boolean(-44.5));
console.log('Boolean3:'+Boolean(11.5));
console.log('Boolean4:'+Boolean('True'));
//Everything Without a "Value" is False

console.log('Boolean5:'+Boolean(0));
console.log('Boolean5:'+Boolean(-0));
console.log('Boolean5:'+Boolean(""));
let a;
let b=null;
let x=false;
let y=10/"Hallo";
console.log('Boolean5:'+Boolean(a));
console.log('Boolean5:'+Boolean(b));
console.log('Boolean5:'+Boolean(x));
console.log('Boolean5:'+Boolean(y));

///But booleans can also be defined as objects with the keyword new:
let bool=new Boolean(false);
let bool2=false;
console.log('type of bool is '+typeof bool+' type of bool2 is '+ typeof bool2);