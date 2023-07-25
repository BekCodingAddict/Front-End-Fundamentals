//JavaScript Set Date Methods
// The setFullYear() Method
const date1= new Date();
date1.setFullYear(2020);
console.log('set full year: '+date1);
date1.setFullYear(2020,11,3);
console.log('set full year: '+date1);

// const date2=Date();
// date2.setMonth(11);
// console.log('Set Month:'+date2);

//The setDate() Method
const date3=new Date();
date3.setDate(15);
console.log('set date:'+date3);
date3.setDate(date3.getDate()+10);
console.log('set date:'+date3);

//The setHours() Method
const setHour=new Date();
setHour.setHours(22);
console.log('Set Hours:'+setHour);

const setmin=new Date();
setmin.setMinutes(30);
console.log('Set Min:'+setmin);

const setSec=new Date();
setSec.setSeconds(40);
console.log('Set Second:'+setSec);

//Compare Dates
let text=""
const today=new Date();
const someday=new Date();
someday.setFullYear(2100,0,14);
if(someday>today){
    text="Today is before Jauary 14 ,2100!";
}else{
    text="Today is after January 14,2100!";
}
console.log("Text:"+text);