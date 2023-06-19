/// Assignment Example

let x=5;
let y=2;
let z=x+y;

document.getElementById('demo1').innerHTML="z="+z+'.';

//Multiplications

z=x*y;
document.getElementById('demo2').innerHTML="z="+z+'.';

let a=3;
let b=(100+50)*a;
document.getElementById('demo3').innerHTML='b='+b+".";

let text1="A";
let text2="B";
let result1=text1<text2;
document.getElementById('demo4').innerHTML="Is A less than B?"+result1;

let num="20";
let num2="5";
let sum=num<num2;
document.getElementById('demo5').innerHTML="Is 20 less than 5 ? "+sum;

let fristname="John";
let lastname="Doe";
let fullname=fristname+lastname;
document.getElementById('demo6').innerHTML="Full Name: "+fullname;

let text3="What a very ";
text3+="nice day!";
document.getElementById('demo7').innerHTML="Result:"+text3;

let num3=5+5;
let num4="5"+5;
let num5="Hello"+5;
document.getElementById('demo8').innerHTML=num3+"\n"+num4+"\n"+num5;