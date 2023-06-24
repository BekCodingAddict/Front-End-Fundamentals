
function myFunction(p1,p2){
    return p1*p2;
}

let result=myFunction(2,4);
console.log("Result: "+result);


function toCelsius(fahrenheit){
    return (5/9)*(fahrenheit-32);
}

let value=toCelsius(77);
console.log("Value: "+value);
let value2=toCelsius;
console.log("Value: "+value2);

value=toCelsius(77);
let text="The temperature is "+value+" Censius!";
console.log("Text:"+text);

text="The temperature is "+toCelsius(77)+" Celsius!";
console.log("Text:"+text);


function func(){
    let carName="Volvo";
    console.log("CarName :"+carName);
}
func();