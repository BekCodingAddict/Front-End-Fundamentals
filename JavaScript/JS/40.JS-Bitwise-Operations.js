//JavaScript Bitwise Operations
console.log('5 & 1: '+(5 & 1));
console.log('5 | 1: '+(~5));
console.log('5<<1 : '+(5<<1));
console.log('5^1: '+(5^1));
console.log('20>>2: '+(20>>2));
console.log('20>>>2: '+(20>>>2));

//Converting Decimal to Binary
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
console.log(dec2bin(20));

//Converting Binary to Decimal
function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
  }

console.log(bin2dec(dec2bin(20)));