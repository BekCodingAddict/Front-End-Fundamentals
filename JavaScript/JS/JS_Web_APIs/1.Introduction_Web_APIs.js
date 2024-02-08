const x=document.getElementById('p1');

function getLocation(){
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        x.innerHTML=err; 
    }
}

function showPosition(position){
    x.innerHTML='Latitude: '+position.coords.latitude+'<br>Longitude: '+position.coords.longitude;
}

function myFunction(){
    const inpObj=document.getElementById('id1');
    if(!inpObj.checkValidity()){
        document.getElementById('p2').innerHTML=inpObj.validationMessage;
    }else{
        document.getElementById('p2').innerHTML='Input OK!';
    }
}

function myFunction2(){
    let text;
    if(document.getElementById('id2').validity.rangeOverflow){
        text='Value too large!';
    }else{
        text='Input Ok!';
    }
    document.getElementById('p3').innerHTML=text;
}

function hisBack(){
    window.history.back();
}

function Go(){
    window.history.go(-2);
}

localStorage.setItem('name','John Doe');
document.getElementById('p4').innerHTML=localStorage.getItem('name');