//JavaScript Number Methods


//The toString() Method
let x=123;
let result=x.toString();
console.log("x="+result+" type is "+typeof(result));
result=(1234).toString();
console.log("x="+result+" type is "+typeof(result));
result=(100+23).toString();
console.log("x="+result+" type is "+typeof(result));

x=9.656;

result=x.toExponential()
console.log('result='+result+' type of result is '+typeof result);

result=x.toExponential(2)
console.log('result='+result+' type of result is '+typeof result);

result=x.toExponential(4)
console.log('result='+result+' type of result is '+typeof result);

result=x.toExponential(6)
console.log('result='+result+' type of result is '+typeof result);

//The toFixed() Method
x=9.656;
result=x.toFixed(0);
console.log('result='+result+' type of result is '+typeof result);

result=x.toFixed(2);
console.log('result='+result+' type of result is '+typeof result);

result=x.toFixed(4);
console.log('result='+result+' type of result is '+typeof result);

result=x.toFixed(6);
console.log('result='+result+' type of result is '+typeof result);

//The toPrecision() Method
x=9.656;
result=x.toPrecision();
console.log('result='+result+' type of result is '+typeof result);

result=x.toPrecision(2);
console.log('result='+result+' type of result is '+typeof result);

result=x.toPrecision(4);
console.log('result='+result+' type of result is '+typeof result);

result=x.toPrecision(6);
console.log('result='+result+' type of result is '+typeof result);

//The valueOf() Method

x=123;
result=x.valueOf();
console.log('result='+result+' type of result is '+typeof result);

//The Number() Method

console.log('true='+Number(true));
console.log('false='+Number(false));
console.log('10='+Number('10'));
console.log('  10='+Number('  10'));
console.log('10  ='+Number('10  '));
console.log('  10  ='+Number('  10  '));
console.log('10.33='+Number('10.33'));
console.log('10,33='+Number('10,33'));
console.log('10 33='+Number('10 33'));
console.log('Jaloli='+Number('Jaloli'));

//The parseFloat() Method
console.log('10='+parseFloat('10'));
console.log('10.33='+parseFloat('10.33'));
console.log('10 6='+parseFloat('10 6'));
console.log('10 years='+parseFloat('10 years'));
console.log('Years 10='+parseFloat(' years 10'));

console.log('10='+Number.isInteger(10));
console.log('10.5='+Number.isInteger(10.5));

console.log('10='+Number.isSafeInteger(10));
console.log('1234567890101112131415='+Number.isSafeInteger(1234567890101112131415));

console.log('10='+Number.parseInt('10'));
console.log('-10.33='+Number.parseInt('-10.33'));
console.log('-10='+Number.parseInt('-10'));
console.log('10.33='+Number.parseInt('10.33'));
console.log('10 6='+Number.parseInt('10 6'));
console.log('10 Years='+Number.parseInt('10 Years'));
console.log('years 10='+Number.parseInt('years 10'));

