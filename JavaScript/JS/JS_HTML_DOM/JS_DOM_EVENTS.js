function changeText(id){
    id.innerHTML="OOOOHoooo!";
}

function showDate(){
    document.getElementById('demo1').innerHTML=Date();
}

function checkCookies(){
    var text='';
    if(navigator.cookieEnabled==ture){
        text='Cookises are enabled!';
    }else{
        text='Cookies are not enabled!';
    }
    document.getElementById('demo3').innerHTML=text;
}

function upperCase(){
    const x=document.getElementById('frname');
    x.value=x.value.toUpperCase();
}

function mOver(obj){
    obj.innerHTML="Thank You!";
}

function mOut(obj){
    obj.innerHTML="Mause Over Me"
}

function mDown(obj){
    obj.style.backgroundColor='#D94A38';
    obj.innerHTML='Release me!';
}

function mUp(obj){
    obj.style.backgroundColor='#1ec5e5';
    obj.innerHTML='Thank You'
}

function myFunc(x){
    x.style.background='green';
}