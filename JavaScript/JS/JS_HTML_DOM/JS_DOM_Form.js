
function validateForm(){
    let x=document.forms["myFrom"]['fname'].value;
    if(x==""){
        alert('Name must be filled out!');
        return false;
    }
}
function myFunction(){
    let x=document.getElementById('numb').value;
    let text;
    if(isNaN(x)||x<1 || x>10){
        text='input not valid!';
    }else{
        text="Input Ok!";
    }
    document.getElementById('demo1').innerHTML=text

}