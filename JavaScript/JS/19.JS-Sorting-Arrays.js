//Sorting an Array
const fruits=['Banana','Orange','Apple','Mango'];

console.log('fruits with sorting: '+fruits);
console.log('fruits with sorting: '+fruits.sort());

//Reversing an Array
fruits.sort();
console.log('fruits with reversing:'+fruits.reverse());

//Numeric Sort
const points=[40,100,1,5,25,10];
console.log('points='+points.sort());
console.log('points with function sorting:'+points.sort(function(a,b){return a-b}));

//Sorting an Array in Random Order
const point2=[40,100,1,4,25,10];
console.log('Point2='+point2);
console.log('Point with random sorting:'+point2.sort(function(){return 0.5-Math.random()}));

//The Fisher Yates Method
console.log('Point2='+point2);

for (let i=point2.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(i+1));
    let k=point2[i];
    point2[i]=point2[j];
    point2[j]=k;
}
console.log('Point2='+point2);

console.log('Point2='+point2);
point2.sort(function(a,b){return a-b;});
console.log('Point2 array lower value='+point2[0]);
console.log('Point2 array highest value='+point2[point2.length-1]);

console.log('Point2='+point2);
point2.sort(function(a,b){return b-a;});

console.log('Point2 array higher value='+point2[0]);
console.log('Point2 array lower value='+point2[point2.length-1]);

console.log('Point2='+point2);
function arrayMax(point2){return Math.max.apply(null,point2);};
console.log('Highest value is '+arrayMax(point2));

//Using Math.min() on an Array
function arrayMin(point2){return Math.min.apply(null,point2);};
console.log('Lowest value is '+arrayMin(point2));

const arr1=[10,20,30,40,50];
function myarrayMax(arr){
    let len=arr.length;
    let max=-Infinity;
    while(len--){
        if(arr[len]>max){
            max=arr[len];
        }
    }
    return max;
}
console.log('Max value of arr1 :'+myarrayMax(arr1));

//Example (Find Min)
function myarrayMin(arr){
    let len=arr.length;
    let min=Infinity;
    while(len--){
        if(arr[len]<min){
            min=arr[len];
        }
    }
    return min;
}

console.log('Max value of arr1 :'+myarrayMin(arr1));

//Sorting Object Arrays
const cars=[
    {type:'Volvo',year:2016},
    {type:'KIA',year:2001},
    {type:'BMW',year:2010}
];

function displayObj(obj){
    for(let i=0;i<obj.length;i++){
        console.log(obj[i].type+' '+cars[i].year);
    }
}
cars.sort(function(a,b){return a.year-b.year});
displayObj(cars);

//Comparing string properties is a little more complex:
function strinhgSorting(obj){
    obj.sort(function(a,b){
        let x=a.type.toLowerCase();
        let y=b.type.toLowerCase();
        if(x<y){return -1;}
        if(x>y){return 1;}
        return 0;
    })
    displayObj(obj);
}

strinhgSorting(cars);