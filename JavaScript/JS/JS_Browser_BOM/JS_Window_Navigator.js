document.getElementById('p1').innerHTML='CookiesEnabled is :'+navigator.cookieEnabled;
document.getElementById('p2').innerHTML='navigator.appName is :'+navigator.appName;
document.getElementById('p3').innerHTML='navigator.appCodeName is '+navigator.appCodeName;
document.getElementById('p4').innerHTML='navigator.product is '+navigator.product;
document.getElementById('p5').innerHTML='navigator.userAgent is '+navigator.userAgent;
document.getElementById('p6').innerHTML='navigator.platform is :'+navigator.platform;
document.getElementById('p7').innerHTML='navigator.language is :'+navigator.language;
document.getElementById('p8').innerHTML='navigator.onLine is :'+navigator.onLine;
document.getElementById('p9').innerHTML='navigator.javaEnabled is :'+navigator.javaEnabled();

function tryit(){
    alert('I am an alert Box!');
}

function myFunc(){
    let text='';
    if(confirm("Press a button!")){
        text='You pressed Ok!';
    }else{
        text="You pressed Cancel!";
    }
    document.getElementById('p10').innerHTML=text;
}

function myPrompt(){
    let text;
    let person=prompt("Please Enter your name:","Harry Poter");
    if(person==null|| person==''){
        text='User cancelled the prompt.';
    }else{
        text="Hello "+person+'!  How can I assist today?';
    }
    document.getElementById('p11').innerHTML=text;
}