if (typeof window !== 'undefined') {
    // 👉️ can use document here
    console.log('You are on the browser')
  
    console.log(document.title)
    console.log(document.getElementsByClassName('my-class'));
  } 
document.getElementById('mybtn').addEventListener('click', ()=>{
    alert('Hello World');
})