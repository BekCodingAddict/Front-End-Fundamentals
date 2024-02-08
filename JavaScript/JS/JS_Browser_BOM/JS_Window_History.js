function goBack(){
    window.history.back();
}

function goForward(){
    window.history.forward();
}
function myFunc(){
    alert('Hi ');
}

function check(){
    console.log('Hello');
}

setTimeout(check,3000);

const myTimer=()=>{
    const d=new Date();
    document.getElementById('p1').innerHTML=d.toLocaleTimeString();
}

const stopping=setInterval(myTimer,1000);

//
function setCookie(cname,cvalue,exdays){
    const d=new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    let expires="expires="+d.toUTCString();
    document.cookie=cname+'='+cvalue+';'+expires+'; path=/';
}