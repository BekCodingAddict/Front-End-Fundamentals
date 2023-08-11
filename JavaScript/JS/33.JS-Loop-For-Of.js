//JavaScript For Of
const cars = ["BMW", "Volvo", "Mini"];
let txt="";
for(let x of cars){
    txt+=x;
    txt+=",";

}

console.log('txt:'+txt);
 
//Looping over a String
let language="JavaScript";
let newtxt="";
for(let x of language){
    newtxt+=x;
    newtxt+=",";
}
console.log("Newtxt:"+newtxt);