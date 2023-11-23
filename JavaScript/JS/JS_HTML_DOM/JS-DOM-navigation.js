document.getElementById('demo2').innerHTML=document.getElementById('demo1').innerHTML
document.getElementById('demo2').innerHTML=document.getElementById('demo1').firstChild.nodeValue
ocument.getElementById('demo2').innerHTML=document.getElementById('demo1').childNodes[0].nodeValue


document.getElementById('demo3').innerHTML=document.body.innerHTML;
document.getElementById('demo3').innerHTML=document.documentElement.innerHTML

document.getElementById("demo5").innerHTML = document.getElementById("demo4").nodeName;