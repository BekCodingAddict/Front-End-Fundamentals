//ECMAScript 2018
let Show=(x)=>{ console.log('Result: '+x);};

// let myPromise = new Promise();

// myPromise.then();
// myPromise.catch();
// myPromise.finally();

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }

Show(z.a);

let {o,t,...b}={o:1,t:2,b:1,b:2}
Show(o);

//JavaScript String trimStart()
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
Show(text1);
Show(text2);

//JavaScript String trimEnd()
 text1 = "     Hello World!     ";
 text2 = text1.trimEnd();
 Show(text1);
Show(text2);

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
    ];

    const myObj=Object.fromEntries(fruits);

Show(myObj['apples']);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
Show(myArr);
Show(newArr);
const newArr2=newArr.flatMap((x)=>x*2);

Show(newArr2);
Show(Show.toString());