//JavaScript Async
async function myFunc(){
    return "Hello Async!";
}

myFunc().then(
    function(value){ console.log(value);}
);

async function Display(){
    let newPromise=new Promise(function(resolve,reject){
        resolve('I love JS!');
    });
    console.log(await newPromise);
}

Display();