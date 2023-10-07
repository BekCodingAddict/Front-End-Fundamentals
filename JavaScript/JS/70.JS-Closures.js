function calcAge(age){
    return age<0?"error":age*365;
}
const show=(x)=>{ console.log("Result:"+x);};
show(calcAge(0));

let counter =0;
function add(){ return counter+=1;}
show(add());
show(add());
show(add());
//nested function

function Add(){
    let counter=0;
    function plus(){ counter+=1;}
    plus();
    return counter;
}


show(Add());
show(Add());
show(Add());

//JavaScript Closures
const adding=(function(){
    let counter=0;
    return function(){ counter +=1; return counter;}
})();

show(adding());
show(adding());
show(adding());