let w;
function demoWorker(){
    let i=0;
    function timedCount(){
        i++;
        postMessage(i);
        setTimeout('timedCount()',500);
    }
    timedCount();
}

function startWorker(){
    if(typeof(w)=='undefined'){
        w=new Worker('demoWorker()');
    }
    w.onmessage=function(event){
        document.getElementById('result').innerHTML=event.data;
    }
}

function stopWorker(){
    w.terminate();
    w=undefined;
}


let file='/JavaScript/JS/JS_Web_APIs/fetch_text.txt';
fetch(file).then(x=>x.text()).then(y=>document.getElementById('p1').innerHTML=y);

getText('/JavaScript/JS/JS_Web_APIs/fetch_text.txt');
async function getText(file){
    let x=await fetch(file);
    let y=await x.text();
    document.getElementById('p2').innerHTML=y;
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML='Geolocation is not supported by this browser.';
    }
}

function showPosition(){
    x.innerHTML='Latitude: '+showPosition.coords.latitude+'<br> Longitude: '+showPosition.coords.longitude;
}