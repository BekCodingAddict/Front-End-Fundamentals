//Function Declarations
function myFunc(a,b){
    return a*b;
}

const show=(x)=>{ console.log('Result: '+x);};
show(myFunc(2,3));

//Function Expressions
const x=function(a,b){ return a*b; };
show(x(3,2));
let z=x(3,4);
show(z);
show(typeof x);

//The Function() Constructor
const myFunc2=new Function('a','b','return a*b');
let a=myFunc2(4,3);
show(a);

show(Add(5,5))

function Add(a,b){ return a+b};
///Self-Invoking Functions
(function(){
    let text="Hello!!!";
    show(text);
})();

//JavaScript functions can be used in expressions:
let sum=myFunc(2,3)*2;
show(sum);

function foo(a,b){
    return arguments.length;
}

show(foo(2,4));
let str=myFunc.toString();
show(str);