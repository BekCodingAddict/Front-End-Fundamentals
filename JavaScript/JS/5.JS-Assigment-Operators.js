let y = 50;
let x = 10 + y;
document.getElementById('demo1').innerHTML = "x=" + x;

x += 5;
document.getElementById('demo2').innerHTML = "x=" + x;
let text = "Hello"; text += " World";
document.getElementById('demo3').innerHTML = "x=" + text;

x -= 10;
document.getElementById('demo4').innerHTML = "x=" + x;

x *= 2;
document.getElementById('demo5').innerHTML = "x=" + x;

x = 5;
x **= 2;
document.getElementById('demo6').innerHTML = "x=" + x;

x = 25;
x /= 5;
console.log("x=" + x + "\n");

x = 30;
x %= 20;
console.log("x=" + x + "\n");

x = -100;
x <<= 5;
console.log("x=" + x + "\n");

x = -100;
x >>= 5;
console.log("x=" + x + "\n");

x = -100;
x >>>= 5;
console.log("x=" + x + "\n");


x = 100;
x &= 5;
console.log("x=" + x + "\n");

a=10
a|=5;
console.log("x="+a+"\n");

x=100;
x^=5;
console.log("x="+x+"\n");

x=10;
x||=5;
console.log("x="+x+"\n");

x=100;
x??=5;
console.log("x="+x+"\n");







