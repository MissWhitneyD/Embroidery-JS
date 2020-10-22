var canvas;
var c;
window.addEventListener('load',()=>
{
  c = new fabric.Canvas('myCanvas');
  var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    angle: 45
  });
  
  c.add(rect);

});
/*var c ;
var ctx;
var currColor;
window.addEventListener('load', ()=>{           
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d"); 
    drawHoop();

    cp = document.getElementById("threadColor");
    cp.addEventListener("change", watchColorPicker, false);
    currColor = 'black';
    //resize(); // Resizes the canvas once the window loads 
    drawHoop();
    document.addEventListener('mousedown', startPainting); 
    document.addEventListener('mouseup', stopPainting); 
    document.addEventListener('mousemove', sketch); 
    window.addEventListener('resize', resize); 
});

function drawHoop(){

    //ctx.beginPath();
    var width = c.width;
    var height = c.height;
    var circle = new Path2D();
    circle.arc(width/2, height/2, height/2, 0* Math.PI, 2 * Math.PI);
    ctx.strokeStyle =  "red";
    ctx.stroke(circle);
    ctx.strokeStyle = currColor;
}

function resize(){ 
    ctx.canvas.width = window.innerWidth; 
    ctx.canvas.height = window.innerHeight; 
  } 




let coord = {x:0 , y:0}; 

let paint = false; 

function getPosition(event){ 
    coord.x = event.clientX - c.offsetLeft; 
    coord.y = event.clientY - c.offsetTop; 
  }  

  function startPainting(event){ 
    paint = true; 
    getPosition(event); 
  } 
  function stopPainting(){ 
    paint = false; 
  } 
     
  function sketch(event){ 
    if (!paint) return; 
    ctx.beginPath(); 
      
    ctx.lineWidth = 2; 
     
    // Sets the end of the lines drawn 
    // to a round shape. 
    ctx.lineCap = 'round'; 
      
    ctx.strokeStyle = currColor; 
        
    // The cursor to start drawing 
    // moves to this coordinate 
    ctx.moveTo(coord.x, coord.y); 
     
    // The position of the cursor 
    // gets updated as we move the 
    // mouse around. 
    getPosition(event); 
     
    // A line is traced from start 
    // coordinate to this coordinate 
    ctx.lineTo(coord.x , coord.y); 
      
    // Draws the line. 
    ctx.stroke(); 
  } 

  //watches the color picker and updates the currColor variable on change
  function watchColorPicker(event) {
    currColor = event.target.value;
  }*/