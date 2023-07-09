//JavaScript BigInt
let x=999999999999999;
let y=9999999999999999;
console.log('x='+x+" y="+y);

x=999999999999999n;
console.log('x='+x+" typeof x is "+typeof(x));

y=BigInt(123456789101112131415);
console.log('y='+y+" typeof y is "+typeof(y));

let sum=x+y;
console.log('sum='+sum+" typeof sum is "+typeof(sum));
// Error: Cannot mix BigInt and other types, use explicit conversion.
// sum=5n/2;
sum=Number(5n)/2;
console.log('sum='+sum+' typeof sum is '+typeof(sum));

//BigInt Hex, Octal and Binary
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n
let bin = 0b100000000000000000000000000000000000000000000000000011n;

console.log('hex='+hex+", oct="+oct+", bin="+bin);

//Precision Curiosity
//MAX_SAFE_INTEGER Example
console.log("Condition is "+(9007199254740992 === 9007199254740993));