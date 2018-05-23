var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
var maxRadius = 40;
// var minRadius = 2;
var colorArray = [
    '#FFE56A',
    '#FDA47A',
    '#FEAEA3',
    '#FF9A65',
    '#FFE1C2'
];

console.log("Test");


// var bubbleSound = new sound("bubble.wav");


var c = canvas.getContext('2d');
// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(300, 300, 100, 100);

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "blue";
// c.stroke();

// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false);
// c.strokeStyle = 'Yellow';
// c.stroke();

// for (var i=0;i<100;i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     c.strokeStyle = 'Blue';
//     c.stroke();
// }

// function sound(src){
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display="none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//         this.sound.play();
//     }
//     this.stop = function(){
//         this.sound.stop();
//     }
// }


// function Circle(x, y, dx, dy, radius, fills){
function Circle(x, y, dx, dy, radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    // this.fills=fills;
    this.color=colorArray[Math.floor(Math.random() * colorArray.length)];
    this.minRadius=radius;

    this.draw = function() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.strokeStyle = this.color;
        c.fillStyle = this.color;
        c.fill();
        c.stroke();    
    }
    this.update = function(){
        
        // var f = this.fillStyle();
        // console.log(f);

        if (this.x + this.radius > innerWidth|| this.x - this.radius < 0){
            this.dx = -this.dx;
            // bubbleSound.play();
        }
        if ( this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
            // bubbleSound.play();
        }
        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y - this.y <50 && mouse.y-this.y>-50){
            
            if(this.radius < maxRadius){
                this.radius += 1;
            }
        }else if(this.radius > this.minRadius) {
            this.radius-= 1;
        }

        this.draw();
    }
}

var circleArray = [];



function init(){
    circleArray = [];

    for (var i=0;i<1000;i++){
        
        var red = Math.floor(Math.random() * 255);
        var green =Math.floor(Math.random() * 255);
        var blue =Math.floor(Math.random() * 255);
        var x = Math.random() * (innerWidth-radius*2)+radius;
        var y = Math.random() * (innerHeight-radius*2)+radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        var radius = Math.random() * 3 + 1;
        // var fills = 'rgba('+red+','+green+','+blue+',0.5)'
        // circleArray.push(new Circle(x,y, dx, dy, radius, fills));
        circleArray.push(new Circle(x,y, dx, dy, radius));
        console.log(circleArray);
    }

}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
}
init();
animate();


