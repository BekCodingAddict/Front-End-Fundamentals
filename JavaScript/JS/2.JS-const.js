try {
    const PI= 3.141592653589793;
    PI=3.14;
} catch (err) {
    document.getElementById('demo').innerHTML="Error:"+err;
}

const car=["BMW","AUDI","VOLVO"];

document.getElementById('demo1').innerHTML="car="+car+";\n";
car[0]="Tayota";
document.getElementById('demo2').innerHTML="car="+car+";";
car.push("Lambo");
document.getElementById('demo3').innerHTML="car="+car+";";

try {
    car=['Mclaren','Mers','AstonMartin'];
} catch (error) {
    document.getElementById('demo4').innerHTML="Error:"+error;
}

const model={name:"Buggati",model:"Buggati Vyron S500",color:"Black"}

document.getElementById('demo5').innerHTML="before:"+model.name+model.model+model.color;
//change properdy
model.color="red";
//add properdy
model.owner="Otabek";

document.getElementById('demo6').innerHTML="After:"+"Car Brend:"+model.name+"Car Model"+model.model+"Car Color:"+model.color+"Car Owner"+model.owner;

try {
    model={name:"BMW",model:"C5",color:"white"};
} catch (error) {
    document.getElementById('demo7').innerHTML="Error:"+error;
    
}

const x=2;
// here x is 2
{
    const x=10;
    // in block x=10
}

/// here again x=2;