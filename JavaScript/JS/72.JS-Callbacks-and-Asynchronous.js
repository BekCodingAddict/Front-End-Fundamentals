
//JS CallBack function

function Display(some){
    console.log(some);
}

function Calculator(num1,num2){
    let sum=num1+num2;
    Display(sum);
}

//this is the callback function
Calculator(5,5);
function myCalculator(num1,num2,myCallback){
    let sum=num1+num2;
    myCallback(sum);
}

myCalculator(10,10,Display);

//Asynchronous JavaScript
function MyFunc(){
    console.log('I love JavaScript!');
}
setTimeout(MyFunc,3000);

//Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead
setTimeout(function(){ Func('I Love JS!');},3000);

function Func(value){
    console.log(value);
}

function showDate(){
    let d=new Date();
    console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
}

setInterval(showDate,1000);