//JavaScript Get Date Methods

//The getFullYear() Method
const date=new Date('2021-03-31');
console.log('get full year: '+date.getFullYear());
const now=Date();
//The getMonth() Method
console.log('get month: '+date.getMonth());
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date("2021-03-25");
let month = months[d.getMonth()];
console.log('Month:'+month);

//The getDate() Method
console.log('get date: '+date.getDate());
//The getHours() Method]
console.log('get hour: '+date.getHours());
//The getMinutes() Method
console.log('Get Minutes:'+date.getMinutes());
//The getSeconds() Method
console.log('Get Minutes:'+date.getSeconds());