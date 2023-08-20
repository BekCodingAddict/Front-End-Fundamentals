//JavaScript Array forEach()
const numbers=[45,4,9,16,25];
let txt="";
numbers.forEach(myFunc);

function myFunc(value,index,array){
    txt=value;
    console.log('txt='+txt);
}

//JavaScript Array map()
const numbers2=numbers.map(myFunc2);

function myFunc2(value,index,array){
    return value*2;
}
console.log('numbers2: '+numbers2);

//JavaScript Array flatMap()
const arr1=[1,2,3,4,5,6];
const newArr=arr1.flatMap((x=>x*2));
console.log('newArr: '+newArr);

//JavaScript Array filter()
console.log('numbers: '+numbers);