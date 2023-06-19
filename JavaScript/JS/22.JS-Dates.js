//JavaScript Date Objects
const date=Date();
console.log('date:'+date);

const d=new Date('2023-8-03');
console.log('d='+d);

//Creating Date Objects
const dString=new Date('October 13 ,1997 11:33.00');
console.log('dstring:'+dString);
const d2=new Date('2022-03-08');
console.log('d2:'+d2);
const d3=new Date(2018, 11, 24, 10, 33, 30, 0);
console.log('d3: '+d3);

const date4=new Date(97,8,3);
console.log('date4:'+date4);

//new Date(milliseconds)
const date5=new Date(10000000000);
console.log('date5:'+date5);

const date6=new Date(-10000000000);
console.log('date6:'+date6);
console.log('Date6:'+date6.toDateString());
console.log('Date6:'+date6.toUTCString());