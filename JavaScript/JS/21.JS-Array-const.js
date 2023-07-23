//JavaScript Array Const
const cars = ["Saab", "Volvo", "BMW"];

//Cannot be Reassigned
//cars=["Toyota", "Volvo", "Audi"]; Error!

//Elements Can be Reassigned
cars[0]='Tayota';
console.log('cars:'+cars);

// You can add an element
let lenght;
lenght=cars.push('Audi');
console.log('cars: '+cars+" Lenght:"+lenght);

//Const Block Scope
{
    const cars=["Toyota", "Volvo", "BMW"];
    console.log('Cars in scope: '+cars);
}

console.log('cars out:'+cars);


//An array declared with var does not have block scope:

var fruits=['Banana','Orange','Mellon'];

{
    var fruits=['Apple','Blueberry','Kivi'];
    console.log('Fruits in scope:'+fruits);
}

console.log('Fruits outside:'+fruits);