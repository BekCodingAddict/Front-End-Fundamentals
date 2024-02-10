const student={
    name:'Jaloli',
    age:31,
    city:'Seoul,South Korea'
};
student['name']='Jaloliddin';
console.log(student['name']);

function ShowXML(){
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        myFunc(this);
    }
    xhttp.open('GET','/JavaScript/HTML/JS_JSON/employes.xml');
    xhttp.send();
}

const myFunc=(xml)=>{
    const xmlDoc=xml.responseXML;
    const x=xmlDoc.getElementByTagName('employee');
    let table='<tr><th>Frist Name</th><th>Last Name</th></tr>';
    for(let i=0;i<x.length;i++){
        table+='<tr><td>'+x[i].getElementByTagName('fristName')[0].childNodes[0].nodeValue+
        '</td><td>'+x[i].getElementByTagName('lastName')[0].childNodes[0].nodeValue+'</td></tr>'
    }
    document.getElementById('demo').innerHTML=table;
}

const text='{"Name":"John","age":30,"city":"New York","Birth":"1997-08-03"}';
const obj=JSON.parse(text);
obj['Birth']=new Date(obj.Birth);
console.log(obj.Birth+'---'+obj.Name);

const person={name:'Jaloli',age:30,City:'Seoul',today: new Date(),func:function(){return 30;}};
person.func=person.func.toString();
const str=JSON.stringify(person);
console.log(str+ " type:"+typeof str);

for(let i in person){
    console.log(i+':'+person[i]);
}