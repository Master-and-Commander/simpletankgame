var A = new Array();
var C = new Array();
var gridPoints = new Array();
var gpc = 0;
var keepDots = true;
var shown = 1;
var gunCounter = 0;
var pointCounter = 0;
var prop = 1;
var palleteNumber = 3;
var widthNumber = 1;
var counter = 1;
var begId;
var tarId;
var gunType = 1;
var x;
var y;
var c = document.getElementById("canvas02");
var ctx = c.getContext("2d");
var canvasWidth = 600;
var canvasHeight = 500;
var waitingpoints = new Array();
var wpc = 0;
var hullpoints = new Array();
var forHull = false;
var forHull2 = false;
var hpc = 0;
var palette = new Array();
palette[1] = "#E8E0DD";
palette[2] = "#cbd4b3";
palette[3]= "#3E564C";
palette[4] = "#71A592";
palette[5] = "#B9DFC8";
palette[6] = "#E2F0F5";


var complete = new Array();
///////// no change
function designateXandY(event) {
    if(event.pageX < canvasWidth && event.pageY < canvasHeight)
    {
        x = event.pageX;
        y = event.pageY;
    }
}
function handleA() {
    for(var i  = 1; i < complete.length; i++) {
        if(complete[i][0] == 0 && Math.abs(complete[i][1] - x) < 10 && Math.abs(complete[i][2] - y) < 10)
        {
            begId = i;
        }
    }

}
function handleS() {
    for(var i  = 1; i < complete.length; i++) {
        if(complete[i][0] == 0 && Math.abs(complete[i][1] - x) < 10 && Math.abs(complete[i][2] - y) < 10)
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
    ctx.fillStyle = palette[palleteNumber];
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
    complete[counter][7] = shown;
    if (shown == 0) {
        C[pointCounter] = new Array();
        C[pointCounter][0] = complete[begId][1];
        C[pointCounter][1] = complete[begId][2];
        C[pointCounter][2] = x;
        C[pointCounter][3] = y;
        pointCounter++;
    }

    tarId = counter;

    ctx.beginPath();
    ctx.fillStyle = palette[palleteNumber];
    ctx.arc(x, y, 5, 0, 2 * Math.PI);

    ctx.fill();

    complete[begId][3][ complete[begId][4] ] = new Array();
    complete[begId][3][ complete[begId][4] ][0] = tarId;
    complete[begId][3][ complete[begId][4] ][1] = widthNumber;
    complete[begId][3][ complete[begId][4] ][2] = palleteNumber;
    complete[begId][4]++;
    counter++;

    ctx.beginPath();
    ctx.strokeStyle = palette[palleteNumber];
    ctx.moveTo(complete[begId][1], complete[begId][2]);
    ctx.lineTo(complete[tarId][1], complete[tarId][2]);
    ctx.stroke();
}
function handleZ() {
    complete[0] = new Array();
    complete[0][0] = x;
    complete[0][1] = y;
    complete[0][2] = 0;
    complete[0][3] = new Array();
    complete[0][4] = new Array();
    complete[0][5] = new Array();
}
function handleP() {
    for(var i  = 1; i < complete.length; i++) {
        if(complete[i][0] == 0 && Math.abs(complete[i][1] - x) < 10 && Math.abs(complete[i][2] - y) < 10)
        {
            x = complete[i][1];
            y = complete[i][2];
        }
    }

    waitingpoints[wpc] = new Array();
    waitingpoints[wpc][0] = x;
    waitingpoints[wpc][1] = y;
    wpc++;
}
function handleO() {

    for(var i = 0; i < gpc; i++ ) {
        if(Math.abs(gridPoints[i][0] - x) < 10 && Math.abs(gridPoints[i][1] - y) < 10) {
            x = gridPoints[i][0];
            y = gridPoints[i][1];
            break;
        }
    }
    ctx.beginPath();
    ctx.arc( x, y, 5, 0, 2 * Math.PI);
    ctx.strokeStyle = "red";
    ctx.stroke();
    waitingpoints[wpc] = new Array();
    waitingpoints[wpc][0] = x;
    waitingpoints[wpc][1] = y;

    wpc++;
}
function handleL() {
    // primary Hull
    if (forHull) {
        complete[0][4] = new Array();
        for (var i = 0; i < waitingpoints.length; i++) {
            complete[0][4][i] = new Array();
            complete[0][4][i][0] = waitingpoints[i]; // x and y;
            complete[0][4][i][1] = 0; // distance
            complete[0][4][i][2] = 0; // angle
        }
        waitingpoints = new Array();
        wpc = 0;
    }
    // secondary Hull
    else if (forHull2) {
        complete[0][5] = new Array();
        for (var i = 0; i < waitingpoints.length; i++) {
            complete[0][5][i] = new Array();
            complete[0][5][i][0] = waitingpoints[i]; // x and y;
            complete[0][5][i][1] = 0; // distance
            complete[0][5][i][2] = 0; // angle
        }
        waitingpoints = new Array();
        wpc = 0;
    }
    // ordinary shape
    else {
        ctx.fillStyle = palette[palleteNumber];
        ctx.beginPath();
        ctx.moveTo(waitingpoints[0][0], waitingpoints[0][1]);
        for (var i = 0; i < waitingpoints.length - 1; i++) {
            ctx.lineTo(waitingpoints[i + 1][0], waitingpoints[i + 1][1]);
        }
        ctx.closePath();
        ctx.fill();

        complete[counter] = new Array();
        complete[counter][0] = 1;
        complete[counter][1] = new Array();
        complete[counter][2] = new Array();
        complete[counter][2][0] = palleteNumber;
        for (var i = 0; i < waitingpoints.length; i++) {
            complete[counter][1][i] = new Array();
            complete[counter][1][i][0] = waitingpoints[i];
            complete[counter][1][i][1] = 0;
            complete[counter][1][i][2] = 0;

        }
        waitingpoints = new Array();
        counter++;
        wpc = 0;



    }
}
////// no change end
function borderLines() {
    gpc = 0;
    for(var i = 0; i < canvasWidth; i += 20) {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = .5;
        ctx.moveTo(i,0);
        ctx.lineTo(i, canvasHeight);
        ctx.stroke();
        for (var j = 0; j < canvasHeight; j+=20) {
            gridPoints[gpc] = new Array(2);
            gridPoints[gpc][0] = i;
            gridPoints[gpc][1] = j;
            gpc++;
        }
    }
    for(var i = 0; i < canvasHeight; i += 20) {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = .5;
        ctx.moveTo(0 , i);
        ctx.lineTo( canvasWidth, i);
        ctx.stroke();
    }
}


// bullets
function handleX() {
    complete[counter] = new Array();
    complete[counter][0] = 2;
    complete[counter][1] = x;
    complete[counter][2] = y;
    complete[counter][3] = 0;
    complete[counter][4] = 0;
    complete[counter][5] = gunType;
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
    for (var i = 0; i < complete[0][4].length; i++) {
     dist = Math.sqrt(Math.pow((complete[0][0] - complete[0][4][i][0][0]),2) + Math.pow((complete[0][1] - complete[0][4][i][0][1]),2));
     ex = complete[0][4][i][0][0] - complete[0][0];
     why = complete[0][4][i][0][1] - complete[0][1];
     angle = Math.atan(why/ex);
     if (ex < 0)
            {
                angle += Math.PI;
            }
            complete[0][4][i][1] = dist;
            complete[0][4][i][2] = angle; 
    }

    for (var i = 0; i < complete[0][5].length; i++) {
        dist = Math.sqrt(Math.pow((complete[0][0] - complete[0][5][i][0][0]),2) + Math.pow((complete[0][1] - complete[0][5][i][0][1]),2));
        ex = complete[0][5][i][0][0] - complete[0][0];
        why = complete[0][5][i][0][1] - complete[0][1];
        angle = Math.atan(why/ex);
        if (ex < 0)
        {
            angle += Math.PI;
        }
        complete[0][5][i][1] = dist;
        complete[0][5][i][2] = angle;
    }


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

        else if (complete[i][0] == 1){

            for (var k = 0; k < complete[i][1].length; k++)
            {
                ex = complete[i][1][k][0][0] - complete[0][0];
                why = complete[i][1][k][0][1] - complete[0][1];
                dist = Math.sqrt(Math.pow(ex,2) + Math.pow(why,2));
                angle = Math.atan(why/ex);
                if (ex < 0)
                {
                    angle += Math.PI;
                }

                complete[i][1][k][1] = dist;
                complete[i][1][k][2] = angle;
            }
        }



    }
    // now write array to a file somehow
    writeBetter();
}

function move(s) {
    if(s.keyCode > 47 && s.keyCode < 53)
        palleteNumber = s.keyCode - 48;
    else
    switch (s.keyCode) {
        case (65): handleA(); break;
        case (66): handleB(); break;
        case (67): handleC(); break;
        case (68): handleD(); break;
        //case (69)
        case (83): handleS(); break;

        case (69):
            complete[0][2] += Math.PI/12;
            complete[0][2] %= 2 * Math.PI;
            reConfigure(); break;
        case (70): handleF(); break;
        case (90): handleZ(); break;
        case (88): handleX(); break;

        case (77): finish(); break;
        case (79): handleO(); break;
        case (80): handleP(); break;
        case (76): handleL(); break;
    }
}

function handleB() {
    prop /= 2;
}


function reConfigure() {
    ctx.fillStyle = "white";
    ctx.clearRect(0,0, 600, 500);
    borderLines();
    for(var i = 1; i < complete.length; i++) {
        if(complete[i][0] == 0) {
            complete[i][1] = prop * complete[i][5][0] * Math.cos(complete[i][5][1] + complete[0][2]) + complete[0][0];
            complete[i][2] = prop * complete[i][5][0] * Math.sin(complete[i][5][1] + complete[0][2]) + complete[0][1];
            /*
            ctx.beginPath();
            ctx.arc(complete[i][1], complete[i][2], prop*2, 0, 2 * Math.PI);
            ctx.fillStyle = "black";
            ctx.fill();
            */
        }

        if(complete[i][0] == 1) {
            for (var k = 0; k < complete[i][1].length; k++)
            {
                complete[i][1][k][0][0] = prop * complete[i][1][k][1] * Math.cos(complete[i][1][k][2] + complete[0][2]) + complete[0][0];
                complete[i][1][k][0][1] = prop * complete[i][1][k][1] * Math.sin(complete[i][1][k][2] + complete[0][2]) + complete[0][1];

            }
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
        else if (complete[k][0] == 1) {
            ctx.fillStyle = palette[complete[k][2][0]];
            ctx.beginPath();
            ctx.moveTo(complete[k][1][0][0][0], complete[k][1][0][0][1]);
            //var problem;
            //problem = "";
            //problem += "x0: " + complete[k][1][0][0][0] + " y0: " + complete[k][1][0][0][1];
            for (var i = 1; i < complete[k][1].length; i++) {
                ctx.lineTo(complete[k][1][i][0][0], complete[k][1][i][0][1]);
                //problem += "x0: " + complete[k][1][i][0][0] + " y0: " + complete[k][1][i][0][1];
            }
            ctx.closePath();
            ctx.fill();
            //window.alert(problem);
        }

    }
}
function init() {
    borderLines();
    window.addEventListener("keydown", move, false);
    window.addEventListener("click",designateXandY,false);
}
var prompt;


var name = "placements"
var numb = "01";
function writeBetter() {
    prompt = "";
    prompt += "function setEqualTo"+numb+"(s) {\n";
    prompt += name + "[s] = new Array();\n";
    prompt += name + "[s][0] = new Array();\n";
    prompt += name + "[s][0][0]= "+ complete[0][0] +";\n";
    prompt += name + "[s][0][1]= "+ complete[0][1] +";\n";
    prompt += name + "[s][0][2]= "+ complete[0][2] +";\n";
    prompt += name + "[s][0][3] = new Array();\n";
    for(var j = 0; j < gunCounter; j++) {
        prompt += name + "[s][0][3]["+j+"]= "+ complete[0][3][j] +";\n";
    }

    for(var i = 1; i < complete.length; i++) {
        if(complete[i][0] == 0) {
            prompt += name + "[s]["+i+"] = new Array();\n";
            prompt += name + "[s]["+i+"][0] = "+ complete[i][0] +";\n";
            prompt += name + "[s]["+i+"][1] = "+ complete[i][1] +";\n";
            prompt += name + "[s]["+i+"][2] = "+ complete[i][2] +";\n";
            prompt += name + "[s]["+i+"][3] = new Array();\n";
            prompt += name + "[s]["+i+"][4] = "+ complete[i][4] +";\n";
            prompt += name + "[s]["+i+"][5] = new Array();\n";
            prompt += name + "[s]["+i+"][5][0] = "+ complete[i][5][0] +";\n";
            prompt += name + "[s]["+i+"][5][1] = "+ complete[i][5][1] +";\n";

            for(var k = 0; k < complete[i][3].length; k++) {
                prompt += name + "[s]["+i+"][3]["+k+"] = new Array();\n";
                prompt += name + "[s]["+i+"][3]["+k+"][0] =  "+ complete[i][3][k][0] +";\n";
                prompt += name + "[s]["+i+"][3]["+k+"][1] =  "+ complete[i][3][k][1] +";\n";
                prompt += name + "[s]["+i+"][3]["+k+"][2] =  "+ complete[i][3][k][2] +";\n";
            }
        }

        else if(complete[i][0] == 2) {
            prompt += name + "[s]["+i+"] = new Array();\n";
            prompt += name + "[s]["+i+"][0] = "+ complete[i][0] +";\n";
            prompt += name + "[s]["+i+"][1] = "+ complete[i][1] +";\n";
            prompt += name + "[s]["+i+"][2] = "+ complete[i][2] +";\n";
        }

        else if(complete[i][0] == 1)
        {

            prompt += "complete[" + i + "] = new Array();\n";
            prompt += "complete[" + i + "][0] = 1;\n";
            prompt += "complete[" + i + "][1] = new Array();\n";
            for (var k = 0; k < waitingpoints.length; k++)
            {
                prompt += "complete[" + i + "][1]["+k+"] = " + complete[i][1][k] + ";\n";
            }
        }
    }
    prompt += "}\n";
    document.getElementById("chum").value = prompt;
}
window.addEventListener("load", init, false);