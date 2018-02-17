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

var A = new Array();

var gunCounter = 0;
var shapes = new Array();
var shapeCounter = 0;
var prop = 1;
var palleteNumber = 1;
var widthNumber = 1;
var counter = 1;
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


var complete = new Array();
function designateXandY(event) {
    if(event.pageX < canvasWidth && event.pageY < canvasHeight)
    {
        x = event.pageX;
        y = event.pageY;
    }
   // document.getElementById("clown").innerHTML = begId;
}
function initialize() {

}
function handleA() {
    for(var i  = 1; i < complete.length; i++) {
        if(complete[i][0] == 0 && Math.abs(complete[i][1] - x) < 5 && Math.abs(complete[i][2] - y) < 5)
        {
            begId = i;
        }
    }

}
function handleS() {
    for(var i  = 1; i < complete.length; i++) {
        if(complete[i][0] == 0 && Math.abs(complete[i][1] - x) < 5 && Math.abs(complete[i][2] - y) < 5)
        {
            tarId = i;
        }
    }
    // connect to first point.
    complete[begId][3][ complete[begId][4] ] = new Array();
    complete[begId][3][ complete[begId][4] ][0] = tarId;
    complete[begId][3][ complete[begId][4] ][1] = widthNumber;
    complete[begId][3][ complete[begId][4] ][2] = palleteNumber;
    complete[begId][4]++;

    ctx.beginPath();
    ctx.moveTo(complete[begId][1], complete[begId][2]);
    ctx.lineTo(complete[tarId][1], complete[tarId][2]);
    ctx.stroke();

}
function handleD() {
    // create new point
    complete[counter] = new Array();
    complete[counter][0] = 0;
    complete[counter][1] = x;
    complete[counter][2] = y;
    complete[counter][3] = new Array();
    complete[counter][4] = 0;
    begId = counter;

    ctx.beginPath();
    ctx.arc( complete[counter][1], complete[counter][2], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    counter++;
}
function handleF() {
    complete[counter] = new Array();
    complete[counter][0] = 0;
    complete[counter][1] = x;
    complete[counter][2] = y;
    complete[counter][3] = new Array();
    complete[counter][4] = 0;
    tarId = counter;

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    complete[begId][3][ complete[begId][4] ] = new Array();
    complete[begId][3][ complete[begId][4] ][0] = tarId;
    complete[begId][3][ complete[begId][4] ][1] = widthNumber;
    complete[begId][3][ complete[begId][4] ][2] = palleteNumber;
    complete[begId][4]++;
    counter++;

    ctx.beginPath();
    ctx.moveTo(complete[begId][1], complete[begId][2]);
    ctx.lineTo(complete[tarId][1], complete[tarId][2]);
    ctx.stroke();
}
function handleZ() {
    complete[0] = new Array();
    complete[0][0] = x;
    complete[0][1] = y;
    complete[0][2] = 0;
}
function handleX() {
    complete[counter] = new Array();
    complete[counter][0] = 2;
    complete[counter][1] = x;
    complete[counter][2] = y;
    A[gunCounter] = counter;
    gunCounter++;
    counter++;
}
function handleC() {

}
function finish() {
    // for every point
    var dist;
    var angle;
    var ex;
    var why;
    complete[0][3] = A;
    for(var i = 1; i < complete.length; i++) {
        if (complete[i][0] == 0){
            dist = Math.sqrt(Math.pow((complete[0][0] - complete[i][1]),2) + Math.pow((complete[0][1] - complete[i][2]),2));
            ex = complete[i][1] - complete[0][0];
            why = complete[i][2] - complete[0][1];
            angle = Math.atan(why/ex);

            if (ex < 0)
            {
                angle += Math.PI;
            }
            complete[i][5] = new Array();
            complete[i][5][0] = dist;
            complete[i][5][1] = angle;
        }



    }
    // now write array to a file somehow
    writeBetter();
}

function move(s) {
    switch (s.keyCode) {
        case (65): handleA(); break;
        case (66): handleB(); break;
        case (83): handleS(); break;
        case (68): handleD(); break;
        case (69):
            complete[0][2] += Math.PI/12;
            complete[0][2] %= 2 * Math.PI;

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
    for(var i = 1; i < complete.length; i++) {
        if(complete[i][0] == 0) {
            complete[i][1] = prop * complete[i][5][0] * Math.cos(complete[i][5][1] + complete[0][2]) + complete[0][0];
            complete[i][2] = prop * complete[i][5][0] * Math.sin(complete[i][5][1] + complete[0][2]) + complete[0][1];
            ctx.beginPath();
            ctx.arc(complete[i][1], complete[i][2], prop*2, 0, 2 * Math.PI);
            ctx.fillStyle = "black";
            ctx.fill();
        }

    }


    for(var k = 1; k < complete.length; k++) {
        if (complete[k][0] == 0)
        for(var j = 0; j < complete[k][4]; j++) {
            ctx.lineWidth = prop * 4;
            ctx.beginPath();
            ctx.moveTo(complete[k][1], complete[k][2]);
            ctx.lineWidth =  complete[k][3][j][1];
            ctx.strokeStyle = palette[complete[k][3][j][2]];
            ctx.lineTo(complete[ complete[k][3][j][0] ][1],complete[ complete[k][3][j][0] ][2]);
            ctx.stroke();
        }

    }
}

function init() {
    window.addEventListener("keydown", move, false);
    window.addEventListener("click",designateXandY,false);
}
var prompt;


var numb = "01";
function writeBetter() {
    prompt = "";
    prompt += "function setEqualTo"+numb+"(s) {\n";
    prompt += "s = new Array();\n";
    prompt += "s[0] = new Array();\n";
    prompt += "s[0][0]= "+ complete[0][0] +";\n";
    prompt += "s[0][1]= "+ complete[0][1] +";\n";
    prompt += "s[0][2]= "+ complete[0][2] +";\n";
    prompt += "s[0][3] = new Array();\n";
    for(var j = 0; j < gunCounter; j++) {
        prompt += "s[0][3]["+j+"]= "+ complete[0][3][j] +";\n";
    }

    for(var i = 1; i < complete.length; i++) {
        if(complete[i][0] == 0) {
            prompt += "s["+i+"] = new Array();\n";
            prompt += "s["+i+"][0] = "+ complete[i][0] +";\n";
            prompt += "s["+i+"][1] = "+ complete[i][1] +";\n";
            prompt += "s["+i+"][2] = "+ complete[i][2] +";\n";
            prompt += "s["+i+"][3] = new Array();\n";
            prompt += "s["+i+"][4] = "+ complete[i][4] +";\n";
            prompt += "s["+i+"][5] = new Array();\n";
            prompt += "s["+i+"][5][0] = "+ complete[i][5][0] +";\n";
            prompt += "s["+i+"][5][1] = "+ complete[i][5][1] +";\n";

            for(var k = 0; k < complete[i][3].length; k++) {
                prompt += "s["+i+"][3]["+k+"] = new Array();\n";
                prompt += "s["+i+"][3]["+k+"][0] =  "+ complete[i][3][k][0] +";\n";
                prompt += "s["+i+"][3]["+k+"][1] =  "+ complete[i][3][k][1] +";\n";
                prompt += "s["+i+"][3]["+k+"][2] =  "+ complete[i][3][k][2] +";\n";
            }
        }

        else if(complete[i][0] == 2) {
            prompt += "s["+i+"] = new Array();\n";
            prompt += "s["+i+"][0] = "+ complete[i][0] +";\n";
            prompt += "s["+i+"][1] = "+ complete[i][1] +";\n";
            prompt += "s["+i+"][2] = "+ complete[i][2] +";\n";
        }
    }
    prompt += "}\n";
    document.getElementById("chum").value = prompt;
}
window.addEventListener("load", init, false);