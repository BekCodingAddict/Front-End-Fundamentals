//JavaScript Sets

const letters=new Set(['A','B','C']);
let show=(x)=>{ console.log('Result:'+x);};
show(letters)
let text="";
letters.forEach( function(value){ text+=value;});
show(text);
letters.add('A');
letters.add('B');
letters.add('C');
letters.add('D');
show(text);
letters.forEach( function(value){ text+=value;});
show(text);
show(letters.size);
const myIterator=letters.values();
text="";
for(const entry of myIterator){
    text+=entry+",";
};
show(text);
show(typeof myIterator);
text="";

const itr=letters.keys();
for(let key of itr){
    text+=key+'-';
}

show(text);
text="";
const iterator=letters.entries();
for (const entry of iterator){
    text+=entry+"+\n";
}
show(text);
show(typeof letters)

show( letters instanceof Set);