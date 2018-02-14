var targetx;
var targety;
var ref1 = 300;
var ref2 = 300;
var angle;
var angle2;
var x;
var y;
var c = document.getElementById("canvas02");
var ctx = c.getContext("2d");
var beg1;
var beg2;
var end1;
var end2;
var dist;
var dist2;
var changingAngle = 0;

function move(event) {
    document.getElementById("clown").innerHTML = "x: " + event.pageX + " y: " + event.pageY;
    if(event.pageX < 600 && event.pageY < 600) {

        targetx = event.pageX;
        targety = event.pageY;
        calculateAngle();
    }

}

function calculateAngle() {
    // only works with positive x values
    x = targetx - ref1;
    y = targety - ref2;

    angle = Math.atan(y/x);
    if (x < 0) {
        angle += Math.PI;
    }
}

function redraw (){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.moveTo(ref1,ref2);
    ctx.lineTo(10* Math.cos(angle) + ref1, 10*Math.sin(angle) + ref2);
    ctx.stroke();
}
var go = false;
function goAhead() {
 go = true;
}
function draw (){
    changingAngle += Math.PI/50
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.beginPath();

    ctx.moveTo(dist*Math.cos(angle+changingAngle) + ref1, dist*Math.sin(angle+changingAngle) + ref2);
    ctx.lineTo(dist2* Math.cos(angle2 + changingAngle) + ref1, dist2*Math.sin(angle2 + changingAngle) + ref2);
    ctx.stroke();
}


function start() {
    var x1;
    var x2;
    var y1;
    var y2;
    beg1 = 50;
    beg2 = 100;
    end1 = 70;
    end2 = 30;
    dist = Math.sqrt(Math.pow(ref1 - beg1, 2) + Math.pow(ref2 - beg2,2));
    dist2 = Math.sqrt(Math.pow(ref1 - end1, 2) + Math.pow(ref2 - end2,2));
    x1 = beg1 - ref1;
    y1 = beg2 - ref2;

    angle = Math.atan(y1/x1);
    if (x1 < 0) {
        angle += Math.PI;
    }

    x2 = end1 - ref1;
    y2 = end2 - ref2;

    angle2 = Math.atan(y2/x2);
    if (x2 < 0) {
        angle2 += Math.PI;
    }
     ctx.beginPath();
    ctx.moveTo(beg1, beg2);
    ctx.lineTo(end1, end2);
    ctx.stroke();
    //window.addEventListener("mousemove", move, false);
    window.addEventListener("keydown", goAhead, false);
    setInterval(draw, 100);
}

window.addEventListener("load", start, false);