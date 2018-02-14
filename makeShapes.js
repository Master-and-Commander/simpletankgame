/*
 *Origin
 * A[0] = x, y, current angle
 * A[1] = proportion
 * A[2] = distances
 * */
/*
 * normal
 * B[0] = x,y (temporary use)
 * B[1] = for origin's use
 * B[2] = list of connections
 * B[3] = counter;
 *  */
/*
 * port
 * C[0] = x, y,
 * */
var id = 51;
var O = new Array(3);
var A = new Array();
var B = new Array();
var C = new Array();
var prop = 1;

var counter = 0;
var begId;
var tarId;
var x;
var y;
var c = document.getElementById("canvas02");
var ctx = c.getContext("2d");
var canvasWidth = 600;
var canvasHeight = 500;

function designateXandY(event) {
    if(event.pageX < canvasWidth && event.pageY < canvasHeight)
    {
        x = event.pageX;
        y = event.pageY;
    }
    document.getElementById("clown").innerHTML = begId;
}
function handleA() {
    for(var i  = 0; i < B.length; i++) {
        if(Math.abs(B[i][0][0] - x) < 10 && Math.abs(B[i][0][1] - y) < 10)
        {
            begId = i;
            document.getElementById("clown").innerHTML = "peasant";
        }
    }

}
function handleS() {
    for(var i  = 0; i < B.length; i++) {
        if(Math.abs(B[i][0][0] - x) < 10 && Math.abs(B[i][0][1] - y) < 10) {
            tarId = i;
        }
    }
    // connect to first point.
    B[begId][2][B[begId][3]++] = tarId;

    ctx.beginPath();
    ctx.moveTo(B[begId][0][0],B[begId][0][1]);
    ctx.lineTo(B[tarId][0][0],B[tarId][0][1]);
    ctx.stroke();
}
function handleD() {
    // create new point
    B[counter] = new Array();
    B[counter][0] = new Array();
    B[counter][0][0] = x;
    B[counter][0][1] = y;
    B[counter][2] = new Array();
    B[counter][3] = 0;
    begId = counter;
    ctx.beginPath();
    ctx.arc( B[begId][0][0], B[begId][0][1], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    counter++;
}
function handleF() {
    B[counter] = new Array();
    B[counter][0] = new Array();
    B[counter][0][0] = x;
    B[counter][0][1] = y;
    B[counter][2] = new Array();
    B[counter][3] = 0;
    tarId = counter;
    ctx.beginPath();
    ctx.arc(B[tarId][0][0], B[tarId][0][1], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    B[begId][2][ B[begId][3]++ ] = tarId;
    counter++;

    ctx.beginPath();
    ctx.moveTo(B[begId][0][0],B[begId][0][1]);
    ctx.lineTo(B[tarId][0][0],B[tarId][0][1]);
    ctx.stroke();
}
function handleZ() {
    A[0] = new Array();
    A[0][0] = x;
    A[0][1] = y;
    A[0][2] = 0;
    document.getElementById("clown").innerHTML += " angle: " + (A[0][2]*(180/Math.PI));
}
function handleX() {
    C[0] = new Array();
    C[0][0] = x;
    C[0][1] = y;
}
function handleC() {
    //use circles recursively
}
function finish() {
    // for every point
    var dist;
    var angle;
    var ex;
    var why;
    for(var i = 0; i < B.length; i++) {
        // distance between origin and two points on the circle
        dist = Math.sqrt(Math.pow((A[0][0] - B[i][0][0]),2) + Math.pow((A[0][1] - B[i][0][1]),2));
        /// idea: if dist2 is greater than a particular number flip the degree value
        ex = B[i][0][0] - A[0][0];
        why = B[i][0][1] - A[0][1];
        angle = Math.atan(why/ex);

        if (ex < 0)
        {
            angle += Math.PI;
        }

        A[i+1] = new Array();
        A[i+1][0] = dist;
        A[i+1][1] = angle;
    }
    // now write array to a file somehow


}

function move(s) {
    switch (s.keyCode) {
        case (65): handleA(); break;
        case (66): handleB(); break;
        case (83): handleS(); break;
        case (68): handleD(); break;
        case (69):
            A[0][2] = A[0][2] * 180/Math.PI;
            A[0][2] = (A[0][2] + 3) % 360;
            A[0][2] =  A[0][2] * Math.PI/180;

            reConfigure(); break;
        case (70): handleF(); break;
        case (90): handleZ(); break;
        case (88): handleX(); break;
        case (67): handleC(); break;
        case (77): finish(); break;
    }
}
function handleB() {
    prop /= 2;
}

function reConfigure() {
    ctx.fillStyle = "white";
    ctx.clearRect(0,0, 600, 500);
    for(var i = 0; i < B.length; i++) {
        B[i][0][0] = prop * A[i+1][0] * Math.cos(A[i+1][1] + A[0][2]) + A[0][0];
        B[i][0][1] = prop * A[i+1][0] * Math.sin(A[i+1][1] + A[0][2]) + A[0][1];
    }
    for(var k = 0; k < B.length; k++) {
        for(var j = 0; j < B[k][3]; j++) {
            ctx.lineWidth = prop * 4;
            ctx.beginPath();
            ctx.moveTo(B[k][0][0], B[k][0][1]);
            ctx.lineTo(B[ B[k][2][j] ][0][0],B[ B[k][2][j] ][0][1]);
            ctx.stroke();
        }

    }
}
function init() {
    window.addEventListener("keydown", move, false);
    window.addEventListener("click",designateXandY,false);
}
var prompt;
function writeTo() {
    prompt = "";
    prompt += "var A = new Array();\n" +
        "var B = new Array();\n" +
        "var C = new Array();\n" +
        "var prop = 1;\n";
    prompt += "";
}
window.addEventListener("load", init, false);