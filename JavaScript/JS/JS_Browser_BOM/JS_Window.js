document.getElementById('p1').innerHTML="Browser width: "+window.innerWidth;
document.getElementById('p2').innerHTML="Browser height:"+window.innerHeight;

function resizeWin(){
    window.close();
}

document.getElementById('p3').innerHTML='Window screen width:'+screen.width;
document.getElementById('p4').innerHTML='Window screen height:'+screen.height;
document.getElementById('p5').innerHTML='Window screen Available With:'+screen.availWidth;
document.getElementById('p6').innerHTML='Window screen Available Height:'+screen.availHeight

document.getElementById('p7').innerHTML='Screen Color Depth :'+screen.colorDepth;
document.getElementById('p8').innerHTML='Screen Pixel Depth :'+screen.pixelDepth;

document.getElementById('p9').innerHTML='Page Location is '+window.location.href;
document.getElementById('p10').innerHTML='Windows local host name:  '+window.location.hostname;
document.getElementById('p11').innerHTML='Windows pathname :  '+window.location.pathname;
document.getElementById('p12').innerHTML='Windows local protocol:  '+window.location.protocol;
document.getElementById('p13').innerHTML='Windows local port:  '+window.location.port;

function newDoc(){
    window.location.assign('https://www.w3schools.com');
}