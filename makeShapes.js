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
var type  = "{insert here}";
var O = new Array(3);
var A = new Array();
var B = new Array();
var C = new Array();
var gunCounter = 0;
var shapes = new Array();
var shapeCounter = 0;
var prop = 1;
var palleteNumber = 1;
var widthNumber = 1;
var counter = 0;
var begId;
var tarId;
var x;
var y;
var c = document.getElementById("canvas02");
var ctx = c.getContext("2d");
var canvasWidth = 600;
var canvasHeight = 500;
var waitingpoints = new Array();
var wpc = 0;
var palette = new Array();
palette[1] = "#000000";


function designateXandY(event) {
    if(event.pageX < canvasWidth && event.pageY < canvasHeight)
    {
        x = event.pageX;
        y = event.pageY;
    }
    // document.getElementById("clown").innerHTML = begId;
}
function handleA() {
    for(var i  = 0; i < B.length; i++) {
        if(Math.abs(B[i][0][0] - x) < 10 && Math.abs(B[i][0][1] - y) < 10)
        {
            begId = i;
            //document.getElementById("clown").innerHTML = "peasant";
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
    B[begId][2][ B[begId][3] ] = new Array();
    B[begId][2][ B[begId][3] ][0] = tarId;
    B[begId][2][ B[begId][3] ][1] = widthNumber;
    B[begId][2][ B[begId][3] ][2] = palleteNumber;
    B[begId][3]++;

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
    B[begId][2][ B[begId][3] ] = new Array();
    B[begId][2][ B[begId][3] ][0] = tarId;
    B[begId][2][ B[begId][3] ][1] = widthNumber;
    B[begId][2][ B[begId][3] ][2] = palleteNumber;
    B[begId][3]++;
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
    // document.getElementById("clown").innerHTML += " angle: " + (A[0][2]*(180/Math.PI));
}
function handleX() {
    C[0] = new Array();
    C[0][0] = x;
    C[0][1] = y;
}
function handleC() {
    C[gunCounter] = new Array();
    C[gunCounter][0] = x;
    C[gunCounter][1] = y;
    gunCounter++;
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
    writeTo();

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

/// a: old first
/// s: old second
/// d: new first
/// f: new second
/// z: select origin
/// x: select gun location
/// c: circles?

/// p: next point tied to previous
/// o: new next point
/// i: finish shape

function handleB() {
    prop /= 2;
}
// previous point
function handleP() {
    for(var i  = 0; i < B.length; i++) {
        if(Math.abs(B[i][0][0] - x) < 10 && Math.abs(B[i][0][1] - y) < 10)
        {
            waitingpoints[wpc] = new Array();
            waitingpoints[wpc][0] = B[i][0][0];
            waitingpoints[wpc++][1] = B[i][0][1];
        }
    }

}

function handleO() {
    waitingpoints[wpc] = new Array();
    waitingpoints[wpc][0] = x;
    waitingpoints[wpc++][1] = y;
}

function handleI() {
    ctx.beginPath();
    for(var i = 0; i < waitingpoints.length - 1; i++) {
        ctx.moveTo(waitingpoints[i][0], waitingpoints[i][1]);
        ctx.lineTo(waitingpoints[i + 1][0], waitingpoints[i + 1][1]);
    }
    ctx.moveTo(waitingpoints[waitingpoints.length - 1][0], waitingpoints[waitingpoints.length - 1][1]);
    ctx.lineTo(waitingpoints[0][0], waitingpoints[0][1]);
    ctx.closePath();
    ctx.fill();
    shapes[shapeCounter] = new Array();
    for(var i = 0; i < waitingpoints.length; i++) {
        shapes[shapeCounter][i] = new Array();
        shapes[shapeCounter][i][0] = waitingpoints[i][0];
        shapes[shapeCounter][i][1] = waitingpoints[i][1];
        shapes[shapeCounter][i][2] = 0; // to be filled later
    }
}

function reConfigure() {
    ctx.fillStyle = "white";
    ctx.clearRect(0,0, 600, 500);
    for(var i = 0; i < B.length; i++) {
        B[i][0][0] = prop * A[i+1][0] * Math.cos(A[i+1][1] + A[0][2]) + A[0][0];
        B[i][0][1] = prop * A[i+1][0] * Math.sin(A[i+1][1] + A[0][2]) + A[0][1];
        ctx.beginPath();
        ctx.arc(B[i][0][0], B[i][0][1], prop*2, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    for(var k = 0; k < B.length; k++) {
        for(var j = 0; j < B[k][3]; j++) {
            ctx.lineWidth = prop * 4;
            ctx.beginPath();
            ctx.moveTo(B[k][0][0], B[k][0][1]);
            ctx.lineWidth =  B[k][2][j][1];
            ctx.strokeStyle = palette[B[k][2][j][2]];
            ctx.lineTo(B[ B[k][2][j][0] ][0][0],B[ B[k][2][j][0] ][0][1]);
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

    //  prompt += "var A"+type+" = new Array();\n" + "var B"+type+" = new Array();\n" + "var C"+type+" = new Array();\n" + "var prop = 1;\n";
    prompt += "A"+type+"[0] = new Array();\n";

    prompt += "A"+type+"[0][0] = " + A[0][0]+ "; \n";
    prompt += "A"+type+"[0][1] = " + A[0][1] + "; \n";
    prompt += "A"+type+"[0][2] = " + A[0][2] + "; \n";

    for(var i = 0; i < A.length-1; i++) {
        prompt += "A"+type+"["+ (i+1) +"] = new Array(); \n";
        prompt += "A"+type+"["+ (i+1) +"][0] = " + A[i+1][0] + "; \n";
        prompt += "A"+type+"["+ (i+1) +"][1] = " + A[i+1][1] + "; \n";
    }
    //window.alert(prompt);
    for(var i = 0; i < B.length; i++) {
        prompt += "B"+type+"["+ i +"]= new Array(); \n";
        prompt += "B"+type+"["+ i +"][0]= new Array(); \n";

        prompt += "B"+type+"["+ i +"][0][0]= " + B[i][0][0] + "; \n";
        prompt += "B"+type+"["+ i +"][0][1]= " + B[i][0][1] + "; \n";
        prompt += "B"+type+"["+ i +"][2] = new Array(); \n";
        prompt += "B"+type+"["+ i +"][3]= " + B[i][3] + "; \n";
        for(var j = 0; j < B[i][3]; j++) {
            prompt += "B"+type+"["+i+"][2]["+j+"] = new Array(); \n";
            prompt += "B"+type+"["+i+"][2]["+j+"][0] = " + B[i][2][j][0] + "; \n";
            prompt += "B"+type+"["+i+"][2]["+j+"][1] = " + B[i][2][j][1] + "; \n";
            prompt += "B"+type+"["+i+"][2]["+j+"][2] = " + B[i][2][j][2] + "; \n";
        }

    }

    for(var i = 0; i < C.length; i++) {
        prompt += "C"+type+"["+ i +"] = new Array(); \n";
        prompt += "C"+type+"["+ i +"][0] = "+ C[i][0] +"; \n";
        prompt += "C"+type+"["+ i +"][1] = "+ C[i][1] +"; \n";
    }

    document.getElementById('chum').value = prompt;
    // window.alert(prompt);
}
window.addEventListener("load", init, false);