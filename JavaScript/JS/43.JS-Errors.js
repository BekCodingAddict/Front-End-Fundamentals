//JavaScript Errors
function func(){
    const message=document.getElementById('D1');
    message.innerHTML="";
    let x=document.getElementById('demo1').value;
    try{
        if(x.trim()=="") throw "Empty";
        if(isNaN(x)) throw "Not a Number!";
        x=Number(x);
        if(x<5) throw "too low";
        if(x>10) throw 'too high';
        if(x==10 | x==5) throw "It's Suitable Value!";
    }catch(err){
        message.innerHTML="Input is "+err;
    }finally{
        document.getElementById('demo1').value="10";
    }
}

//Range Error
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  console.log('Error: '+err.name);
}


let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  console.log('Error: '+err.name);
}
//Syntax Error
try {
  eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
  console.log('Error: '+err.name);
}

num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {  console.log('Error: '+err.name);
}
//URI (Uniform Resource Identifier) Error
try {
  decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
  console.log('Error: '+err.name);
}