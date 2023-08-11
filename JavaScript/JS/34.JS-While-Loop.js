//JavaScript While Loop
let i=0;
let txt="";
while(i<10){
    txt+="The number is "+i+'\n';
    i++;
}

console.log('txt:'+txt);

//JavaScript Break and Continue

let text="";
for (let i=0;i<10;i++){
    if(i===3){break;}
    text+='The number is '+i+'\n';
}

console.log('text:'+text);

//The Continue Statement
let newtext="";
for (let i=0;i<10;i++){
    if(i===3){continue;}
    newtext+='The number is '+i+'\n';
}
console.log('text:'+newtext);

//JavaScript Labels
const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0];
  text += cars[1];
  break list;
  text += cars[2];
  text += cars[3];
}

console.log('text:'+text)