//JavaScript Date Formats
const date=new Date('2015-03-25');
console.log("Date: "+date);
//ISO Dates (Only Year)
const date2=new Date(2015-8);
console.log('date2: '+date2);

//ISO Dates (Only Year)
const date3=new Date('1997');
console.log('date2: '+date3);
//ISO Dates (Date-Time)
const date4=new Date("2015-03-25T12:00:00Z");
console.log('date4: '+date4);
//JavaScript Short Dates.
const date5=new Date('03/08/1997');
console.log('Date5: '+date5);
//JavaScript Long Dates.
const date6=new Date('Mar 25 2025');
console.log('Date6: '+date6);
//Date Input - Parsing Dates
let msec=Date.parse("July 23, 2023");
console.log('msec: '+msec);
const date7=new Date(msec);
console.log('Date7:'+date7);