// Initial Setup 
const canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d') 

 
canvas.width = innerWidth 
canvas.height = innerHeight 

 
// Variables 
const mouse = { 
     x: 0, 
     y: 0 
} 
const mouse_up = {
    x : 0,
    y : 0
}
const mouse_down = {
    x : 0,
    y : 0
} 
 
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'] 

 
// Event Listeners 
addEventListener('mousemove', function(event) { 
    mouse.x = event.clientX 
    mouse.y = event.clientY 
}) 

addEventListener('mouseup', function(event){
    mouse_up.x = event.pageX;
    mouse_up.y = event.pageY;
})

addEventListener('mousedown', function(event){
    mouse_down.x = event.pageX;
    mouse_down.y = event.pageY;
}) 

addEventListener('resize', function() { 
    canvas.width = innerWidth 
    canvas.height = innerHeight 

 
    init() 
}) 

 
// Utility Functions 
function randomIntFromRange(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min) 
} 

 
function randomColor(colors) { 
    return colors[Math.floor(Math.random() * colors.length)] 
} 

 
function distance(x1, y1, x2, y2) { 
    const xDist = x2 - x1 
    const yDist = y2 - y1 

 
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) 
} 

var startrect = false;

var gradient;
function text_click(x, y){
    this.x = x;
    this.y = y;
    this.text = "Click Here";
    this.font = "bold 50px Verdana";
    this.i = 1;
    this.ss = 'blue';
    this.fs = 'white';
    this.update = function(){
        // if(distance(this.x, this.y, mouse.x, mouse.y) - 220 < 0 ){
        //     console.log(distance(this.x, this.y, mouse.x, mouse.y));
        // }

        if((this.y-mouse.y<50 && this.y-mouse.y>-10) && (this.x-mouse.x > -300 && this.x-mouse.x < 10)){
            this.fs = "red";
        }else{
            this.fs = "white";
        }
        if((this.y-mouse_up.y<50 && this.y-mouse_up.y>-10) && (this.x-mouse_up.x > -300 && this.x-mouse_up.x < 10)){
            this.fs = 'yellow';
            startrect = true;
        }
     

        

        this.draw();
    }
    this.draw = function(){
        c.font=this.font;
        c.lineWidth = 10;
        c.strokeStyle = this.ss;
        c.fillStyle = this.fs;
        c.strokeText(this.text, this.x, this.y);
        c.fillText(this.text, this.x, this.y)
        this.i = c.measureText(this.text);
        
    }
}
var rc;
// Objects 
function Rects(x, y,i) { 

    this.x = x 
    this.y = y
    this.x_i = i;
    this.y_i = 0;
    // this.radius = radius 
    this.color = 'rgba(255,255,255,'+Math.random(0.5,1)+')';

    this.update = function() { 
        this.draw() 
    } 
     
     
    this.draw = function() { 
        c.beginPath() 
        c.rect(this.x_i, this.y_i, this.x, this.y); 
        c.fillStyle = this.color 
        c.fill() 

 

        c.closePath() 
        
    } 
} 

 

 
rc = [] 
// Implementation 
let objects 
function init() { 

    t_c = new text_click((innerWidth/2)-100, innerHeight/2);

   
    for(let i=0; i<canvas.width;i++){
        rc.push(new Rects(10,10,i));
    }
 
    

} 

// Animation Loop 
let xi = 1;
function animate() { 
 
    requestAnimationFrame(animate) 
    c.fillStyle = 'rgba(0,0,0,0.5)';
    c.fillRect(0, 0, canvas.width, canvas.height) 
    t_c.update();
    // if (startrect == true){
    //     rc.update();
    // }
   

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y) 
    if (startrect == true){
       for(let i=0; i<xi ;i++){
           rc[i].update();
       }
       xi+=2;
    }
  
} 

 
init() 
animate() 
