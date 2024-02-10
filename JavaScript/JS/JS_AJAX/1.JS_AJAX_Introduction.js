function loadDoc(){
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        document.getElementById('demo').innerHTML=this.responseText;
    }
    xhttp.open('GET','/JavaScript/JS/JS_AJAX/ajax_info.txt');
    xhttp.send();
}

function loadDoc2(){
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        document.getElementById('demo2').innerHTML=this.responseText;
    }
    xhttp.open('GET','/JavaScript/HTML/JS_AJAX/Html_Table.html');
    xhttp.send();
}


function loadDocument(){
    const xhhtp=new XMLHttpRequest();
    xhhtp.onload=function(){
        myFunction(this);
    }
    xhhtp.open('GET',"JavaScript/HTML/JS_AJAX/cd_catalog.xml");
}

const myFunction=(xml)=>{
    const xmlDoc=xml.responseXML;
    const x=xmlDoc.getElementByTagName('CD');
    let table='<tr><th>Artist</th><th>Title</th></th>';
    for(let i=0;i<x.length;i++){
        table+='<th><td>'+x[i].getElementByTagName('ARTIST')[0].childNodes[0].nodeValue+'</th><td>'+
        x[i].getElementByTagName('TITLE')[0].childNodes[0].nodeValue+'</td></tr>';
        document.getElementById('demo3').innerHTML=table;
    }
}

const showCase=()=>{
    let arr=['Apple','Banana','Orange'];
    let table='<tr><th>Fruits</th><th>Price</th></tr>';
    for(let i of arr){
        table+='<tr><td>'+i+'</td><td>'+'Date'+'</td></tr>';
    }
    document.getElementById('table').innerHTML=table;
    
}
