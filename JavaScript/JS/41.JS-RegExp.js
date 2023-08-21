//Using String search() With a String
let text="Visit Google.com";
let n=text.search('Google');
console.log('n='+n);

//Using String search() With a Regular Expression
n=text.search(/Google/i);
console.log('n2='+n);

let txt='Visit Yandex.com';
let result=txt.replace('Yandex.com','Google.com');

console.log('result:'+result);

//Use String replace() With a Regular Expression
result=txt.replace(/Yandex/i,'Google.com');
console.log('result2:'+result);

text='Google is a big company and Google has a lot of informations.';
result=text.replace(/Google/g,'Yandex');
console.log('result3:'+result);
result=text.replace(/Google/i,'Yandex');
console.log('result4:'+result);

//Using the RegExp Object
//Using test()
const pattern=/e/;
console.log(pattern.test('The best things in life are free!'));

//Using exec()
const obj=/f/.exec('The best things in life are free!');
console.log('Found '+obj[0]+' in  position '+obj.index+' in the text:'+obj.input);