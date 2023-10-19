
let switcher=0;
function change(){
    switcher===0?document.getElementById('demo1').innerHTML='You have clicked the botton!':switcher=1;
    let button=document.getElementById('demo1');
    button.style.backgroundColor="green";
    button.style.color='white';
}
function dbclick(){
    switcher===1 ? document.getElementById('demo1').innerHTML='You have double clicked the botton!': switcher=0;
}
function Display(){
    let location;

    if (typeof document !== "undefined") {
      document = window.document;
    }
    const ele=document.getElementById('demo');
    console.log(ele);
}

Display();