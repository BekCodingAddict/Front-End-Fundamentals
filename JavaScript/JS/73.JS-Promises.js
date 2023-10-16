let myPromise=new Promise(function(myResolve,myReject){
    //Producing Code (May take some time)

    myResolve();// when success
    myReject(); // when error
});

myPromise.then(
    function(value){ /*code if successfull*/},
    function(error){ /*code if some error*/}
    
);

let newPromise=new Promise(function(Resolve,Reject){
    let x=1;

    if(x==0){
        Resolve("Ok!");
    }else{
        Reject("Error");
    }
});
function Display(some){
    console.log(some);
}
newPromise.then(
    function(value){ Display(value);},
    function (error){Display(error);}
)