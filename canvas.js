var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var bubbleSound = new sound("bubble.wav");
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

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display="none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.stop();
    }
}
console.log(bubbleSound);

function Circle(x, y, dx, dy, radius, fills){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.fills=fills;

    this.draw = function() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.strokeStyle = fills;
        c.fillStyle=fills;
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

        this.draw();
    }
}


console.log();


var circleArray = [];

for (var i=0;i<100;i++){
    
    var red = Math.floor(Math.random() * 255);
    var green =Math.floor(Math.random() * 255);
    var blue =Math.floor(Math.random() * 255);
    var x = Math.random() * (innerWidth-radius*2)+radius;
    var y = Math.random() * (innerHeight-radius*2)+radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    var radius = (Math.random()+0.3)*30;
    var fills = 'rgba('+red+','+green+','+blue+',0.5)'
    console.log(fills);
    circleArray.push(new Circle(x,y, dx, dy, radius, fills));
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
}
animate();

