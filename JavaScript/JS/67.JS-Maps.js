//JavaScript Maps

const fruits=new Map([
    ["apple",500],
    ["banana",300],
    ["orange",200]
])

let text="";
fruits.forEach(function(value){
    text+=value+'\n';
})

let show=(x)=>{ console.log('Result: '+x);};

show(text);
fruits.set('Blueberry',100);
show(fruits.size);
fruits.set('apple',400);

let itr=fruits.values();
text="";
for (const key of itr){
    text+=key+'\n';
}
show(text);

show(fruits.get('apple'));

fruits.delete('banana');
show(fruits.size);

show(fruits.has('Banana'));
show(typeof fruits);

show( fruits instanceof Map);
show(fruits instanceof Set);
text="";
for(const x of fruits.entries()){
    text+=x+"\n";
}
show(text);
text='';
for (const x of fruits.keys()){
    text+=x+"\n";
}

show(text);
text="";
for(const x of fruits.values()){
    text+=x+'\n';
}

show(text);

const EURUSD={name:'EURUSD'};
const US30={name:'US30'};
const Gold={name:'Gold'};

const forex=new Map();
forex.set(EURUSD,123.55);
forex.set(US30,33456.6);
forex.set(Gold,2001);
show(forex.size);
show(forex.has('EURUSD'));
show(forex.has(EURUSD));
