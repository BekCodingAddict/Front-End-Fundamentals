//JavaScript For Loop

const car=['Tayota','BMW','Mers','Volvo'];
console.log('Type:'+typeof car+'\n car:'+car);
for (let i=0;i<car.length;i++){
    console.log('car['+i+']='+car[i]+';');
}

//ou can initiate many values in expression 1 (separated by comma):
for (let i=0, len=car.length,text="Hello?";i<len;i++){
    console.log('len='+len+" text="+text);
}