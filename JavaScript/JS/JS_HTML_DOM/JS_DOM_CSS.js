
function change(){
    document.getElementById('demo1').style.backgroundColor='yellow';
}

function Move(){
   const switcher=0;
    let id=null;
    const elem=document.getElementById('animate');
    pos=0;
    clearInterval(id);
    id=setInterval(frame,5);
    function frame(){
        if(pos==350){
        clearInterval(id);
   
        }else{
            pos++;
            elem.style.top=pos+'px';
            elem.style.left=pos+'px';
            switcher=1
        }

    }
}