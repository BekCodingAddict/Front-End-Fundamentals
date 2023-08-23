//JavaScript Scope

{
    let x=2;
    console.log('x:'+x);
    var xx=4;
    console.log('x:'+xx);
}

xx=10;
console.log('x:'+xx);

function func(){
    let carName="Caddillac";
    console.log('CarName:'+carName);
    var year=2020;
    console.log('year:'+year);
    color="Black";
    console.log('Color:'+color);

}
func();
year=2023;
console.log('year:'+year);
color="white";
console.log('Color:'+color);

