let x = 100 + 50;
document.getElementById('demo1').innerHTML = "x=" + x;


let a = 100, b = 50;
let c = a + b;
document.getElementById('demo2').innerHTML = 'c=' + c;

let d = 3;
let f = (100 + 50) * a;
document.getElementById('demo3').innerHTML = 'f=' + f;

let x1 = 5;
let y1 = 2;
let z = x1 - y1;
document.getElementById('demo4').innerHTML = 'z=' + z;


z = x1 * y1;
document.getElementById('demo5').innerHTML = 'z=' + z;

z = x1 / y1;
document.getElementById('demo6').innerHTML = 'z=' + z;


z = x1 % y1;
document.getElementById('demo7').innerHTML = 'z=' + z;

x1++;
let sum = x1;
document.getElementById('demo8').innerHTML = 'z=' + sum;

x1 = 5;
--x1;
sum = x1;
document.getElementById('demo9').innerHTML = 'z=' + sum;

x = 5;
document.getElementById('demo10').innerHTML = "z=" + x ** 2;

document.getElementById('demo11').innerHTML = "z=" + Math.pow(x, 2);

document.getElementById('demo12').innerHTML = "x=" + 100 + 50 * 3;

document.getElementById("demo13").innerHTML = "x=" + (100 + 50) * 3;

document.getElementById("demo14").innerHTML = "x=" + 100 + 50 - 3;
document.getElementById("demo15").innerHTML = "x=" + 100 / 50 * 3;

