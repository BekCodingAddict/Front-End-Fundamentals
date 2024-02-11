// HTML CANVAS
{
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  canvas.height = canvas.width;
  ctx.transform(1, 0, 0, -1, 0, canvas.height)

  const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

  ctx.fillStyle = "red";
  for (let i = 0; i < xArray.length - 1; i++) {
    let x = xArray[i] * 400 / 150;
    let y = yArray[i] * 400 / 15;
    ctx.beginPath();
    ctx.ellipse(x, y, 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}
//Line Graph
{
  const canvas = document.getElementById("myCanvas2");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  canvas.height = canvas.width;
  ctx.transform(1, 0, 0, -1, 0, canvas.height)
  
  let xMax = canvas.height;
  let slope = 1.2;
  let intercept = 70;
  
  ctx.moveTo(0, intercept);
  ctx.lineTo(xMax, f(xMax));
  ctx.strokeStyle = "red";
  ctx.stroke();
  
}

function Show(){
  const xhttp=new XMLHttpRequest();
  xhttp.onload=function(){
    getElementById('demo1').innerHTML=this.responseText;
  }
  xhttp.open('GET','/JavaScript/HTML/JS_Graphics/combination.html');
  xhttp.send();
}

