const para=document.createElement("p");
const node=document.createTextNode("This is new!");
para.appendChild(node);
const element=document.getElementById('div1');
element.appendChild(para);

//Creating new HTML Elements - insertBefore()
const para2=document.createElement('p');
const node2=document.createTextNode('This is new div!');
para2.appendChild(node2);
const element2=document.getElementById('div2');
element2.appendChild(para2);
const child=document.getElementById('p11');
element2.insertBefore(para2,child);

//Removing Existing HTML Elements
const element3=document.getElementById('p11');
element3.remove();

//Removing Child Node
const parent=document.getElementById('div1');
const child2=document.getElementById('p1');
parent.removeChild(child2);

//Replacing HTML Elements
const para3=document.createElement('p');
const node3=document.createTextNode('This is another new div!');
para3.appendChild(node3);
const parent2=document.getElementById('div2');
const child3=document.getElementById('p22');
parent2.replaceChild(para3,child3);

//JavaScript HTML DOM Collections
const myCollection=document.getElementsByTagName('p');
for(let i=0;i<myCollection.length;i++){
    document.getElementById('demo').innerHTML=myCollection[i].innerHTML;
}

function change(){
    const collection=document.getElementsByTagName('p');
    for(let i=0;i<collection.length;i++){
        collection[i].style.color="red";
    }
}


document.getElementById('demo2').innerHTML=myNodeList.length;
function changeSize(){
    const myNodeList=document.querySelectorAll('p');
    for(let i=0;i<myNodeList.length;i++){
        myNodeList[i].style.fontSize='24px';
    }
}

