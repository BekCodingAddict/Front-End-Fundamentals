//JavaScript Arrow Function

let myfunction=(a,b)=>a*b;
console.log(myfunction(4,5));

//Before Arrow:
hello=function (){
    return "Hello World!";
}

console.log('hello:'+hello());

//With Arrow Function:
hello=()=>{
    return 'Hello World';
}
console.log('hello:'+hello());
hello=()=>"Hello JavaScript!";
console.log('hello:'+hello());

//If you have parameters, you pass them inside the parentheses:
val="Computer Science";
hello=(val)=>"Hello "+val+" !";
console.log('hello:'+hello(val));

//In fact, if you have only one parameter, you can skip the parentheses as well:
hello=val=>' Hello'+val+'!';
console.log('hello :'+hello(val));

//With a regular function this represents the object that calls the function:
hello=function(){
    console.log('this: '+this);
}
hello();

//With an arrow function this represents the owner of the function:
hello=()=>{
    console.log('this: '+this);
}
hello();