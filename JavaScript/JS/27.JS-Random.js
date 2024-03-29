//JavaScript Random
// Returns a random integer from 0 to 9:
console.log('Random1:'+Math.floor(Math.random()*10));

// Returns a random integer from 0 to 10:
console.log('Random2:'+Math.floor(Math.random()*11));

// Returns a random integer from 0 to 99:
console.log('Random3:'+Math.floor(Math.random()*100));

// Returns a random integer from 0 to 100:
console.log('Random4:'+Math.floor(Math.random()*101));

// Returns a random integer from 1 to 10:
console.log('Random5:'+Math.floor(Math.random()*10+2));

// Returns a random integer from 1 to 100:
console.log('Random5:'+Math.floor(Math.random()*100+1));

function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log('GetRandomInteger:'+getRndInteger(0,10));

//This JavaScript function always returns a random number between min and max (both included):
function getRndIntegerb(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

console.log('GetRandomInteger:'+getRndIntegerb(0,10));