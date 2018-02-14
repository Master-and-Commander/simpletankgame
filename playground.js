// Organization for map
/**
 * 0: dimensions x
 * 1: dimensions y
 * 2: proportion
 * 3: playertanks array
 * 4: bottanks array
 * 5: projectiles array
 * 6: obstacles array
 * 7: playerStartingLocations array
 * 8: botStartingLocations array
 */
// Organization for tank
/*
* 0: type of tank
*   a: 1 (normal tank)
*   b: 2 (tank with bomb)
*   c: 3 (tank with light saber)
*   d: 4 (tank with four guns)
*   e: 5 (tank that can change locations)
*   f: 100 (dead)
* 1: x coordinate
* 2: y coordinate
* 3: angle of body
* 4: angle of turret
* 5: health
* 6: blast strength
* 7: range
* 8: ability (0: used up, 1: still able)
* 9: (for blast tank): arrays of  bombs
* 10: bodywidth
* 11: bodyheight
* 12: turretwidth
* 13: turretheight
* 14: proportion
* */
// Organization for projectiles
/**
 * 0: type
 * 1: x
 * 2: y
 * 3: width
 * 4: length
 * 5: proportion
 * 6: strength
 */
// images for tanks
/* tankImages
 * 0: 0
 * 1: 1
 * ...
 */

var canvas = document.getElementById("canvas01");
var ctx = canvas.getContext("2d");
var playerTanks = new Array(5);
var botTanks = new Array(5);
var advance = -15;
var bodyMovement = 3;
var selected = 0;
var x = new Array();
var lineList = new Array();
var increment = 0;
var numberOfCircles = 0;
var counter = 0;
var c = document.createElement("canvas");

var ctx1 = c.getContext("2d");
var tankImages = new Array(5);
var numbOfPoints = 9;
var limitx = 500;
var limity = 500;
c.width = limitx;
c.height = limity;
function nextStep()
{
    var lefty = 400;
    var righty = 0;
    var j = 0;
    var k = 0;
    for (var i=0; i < numberOfCircles; i++)
    {
        if (x[i][0] < lefty)
        {
            lefty = x[i][0];
            j = i;
        }
        if (x[i][0] > righty) {
            righty = x[i][0];
            k = i;
        }
    }


    var test;
    var specialI;
    var specialy;
    var d = 0;
    var v = 0;

    var ox, xone, ytwo, yone, oy, xtwo;
    xone = x[j][0];
    xtwo = x[k][0];
    yone = x[j][1];
    ytwo = x[k][1];
    ctx1.beginPath();
    lineList[increment] = new Array(4);
    lineList[increment][0] = xone;
    lineList[increment][1] = yone;
    lineList[increment][2] = xtwo;
    lineList[increment][3] = ytwo;
    increment += 1;
    ctx1.moveTo(xone, yone);
    ctx1.lineTo(xtwo, ytwo);
    ctx1.lineWidth = 7;
    ctx1.strokeStyle = "#22283B";
    ctx1.stroke();



    for (i=0; i < numberOfCircles; i++)
    {

        ox = x[i][0];
        oy = x[i][1];
        test = (ox - xone)*(ytwo - yone) - (oy - yone)*(xtwo - xone);
        if (test > 0) {

            if (d < test) {
                d = test;
                specialI = i;
            }
        }
        else if (test < 0) {

            if (v > test) {
                v = test;
                specialy = i;
            }
        }
    }
    //top
    if (d != 0) {
        ctx.beginPath();
        lineList[increment] = new Array(4);
        lineList[increment][0] = xone;
        lineList[increment][1] = yone;
        lineList[increment][2] = x[specialI][0];
        lineList[increment][3] = x[specialI][1];
        increment += 1;
        ctx1.moveTo(xone, yone);
        ctx1.lineTo(x[specialI][0], x[specialI][1]);
        ctx1.stroke();

        ctx1.beginPath();
        lineList[increment] = new Array(4);
        lineList[increment][0] = xtwo;
        lineList[increment][1] = ytwo;
        lineList[increment][2] = x[specialI][0];
        lineList[increment][3] = x[specialI][1];
        increment += 1;
        ctx1.moveTo(xtwo, ytwo);
        ctx1.lineTo(x[specialI][0], x[specialI][1]);
        ctx1.stroke();
        topflavor(j, specialI);
        topflavor(specialI, k);
    }
    // bottom
    if (v != 0) {
        ctx1.beginPath();
        lineList[increment] = new Array(4);
        lineList[increment][0] = xone;
        lineList[increment][1] = yone;
        lineList[increment][2] = x[specialy][0];
        lineList[increment][3] = x[specialy][1];
        increment += 1;
        ctx1.moveTo(xone, yone);
        ctx1.lineTo(x[specialy][0], x[specialy][1]);
        ctx1.stroke();

        ctx1.beginPath();
        lineList[increment] = new Array(4);
        lineList[increment][0] = xtwo;
        lineList[increment][1] = ytwo;
        lineList[increment][2] = x[specialy][0];
        lineList[increment][3] = x[specialy][1];
        increment += 1;
        ctx1.moveTo(xtwo, ytwo);
        ctx1.lineTo(x[specialy][0], x[specialy][1]);
        ctx1.stroke();
        bottomflavor(j, specialy);
        bottomflavor(specialy, k);
    }

}

function topflavor(pointa, pointb) {
    var xone = x[pointa][0];
    var xtwo = x[pointb][0];
    var yone = x[pointa][1];
    var ytwo = x[pointb][1];
    var d = 0;
    var hasChanged = false;
    for (i=0; i < numberOfCircles; i++)
    {

        ox = x[i][0];
        oy = x[i][1];
        test = (ox - xone)*(ytwo - yone) - (oy - yone)*(xtwo - xone);
        if (test > 0 && d < test) {
            d = test;
            specialI = i;
            hasChanged = true;

        }

    }

    if (hasChanged) {
        connectTheDots(specialI, pointa, pointb);
        topflavor(pointa, specialI);
        topflavor(specialI, pointb);
    }


}
function bottomflavor(pointa, pointb) {
    var xone = x[pointa][0];
    var xtwo = x[pointb][0];
    var yone = x[pointa][1];
    var ytwo = x[pointb][1];
    var v = 0;
    var hasChanged = false;
    for (i=0; i < numberOfCircles; i++)
    {

        ox = x[i][0];
        oy = x[i][1];
        test = (ox - xone)*(ytwo - yone) - (oy - yone)*(xtwo - xone);
        if (test < 0 && v > test)
        {
            v = test;
            specialy = i;
            hasChanged = true;

        }

    }

    if (hasChanged) {
        connectTheDots(specialy, pointa, pointb);
        bottomflavor(pointa, specialy);
        bottomflavor(specialy, pointb);
    }


}

function connectTheDots(target, originone, origintwo)
{

    ctx1.beginPath();
    lineList[increment] = new Array(4);
    lineList[increment][0] = x[originone][0];
    lineList[increment][1] = x[originone][1];
    lineList[increment][2] = x[target][0];
    lineList[increment][3] = x[target][1];
    increment += 1;
    ctx1.moveTo(x[originone][0], x[originone][1]);
    ctx1.lineTo(x[target][0], x[target][1]);
    ctx1.lineWidth = 7;
    ctx1.strokeStyle = "#22283B";
    ctx1.stroke();

    ctx1.beginPath();
    lineList[increment] = new Array(4);
    lineList[increment][0] = x[origintwo][0];
    lineList[increment][1] = x[origintwo][1];
    lineList[increment][2] = x[target][0];
    lineList[increment][3] = x[target][1];
    increment += 1;
    ctx1.moveTo(x[origintwo][0], x[origintwo][1]);
    ctx1.lineTo(x[target][0], x[target][1]);
    ctx1.stroke();
}

function placeADot()
{


    ctx1.clearRect(0,0,limitx,limity);

    var peasant = Math.random() *  limitx;
    var clown = Math.random() * limity;
    while (numberOfCircles < numbOfPoints) {
        peasant = Math.random() *  limitx;
        clown = Math.random() * limity;
        x[counter] = new Array(2);
        x[counter][0] = peasant;
        x[counter][1] = clown;
        //ctx1.beginPath();
        //ctx1.arc(x[counter][0], x[counter][1], 1, 0, 2 * Math.PI);
        //ctx1.fillStyle = "black";
        //ctx1.fill();
        counter += 1;
        numberOfCircles += 1;
    }
    nextStep();
    numberOfCircles = 0;
    counter = 0;

    return convertCanvasToImage(c);
}
var img = new Image();
img.src = 'player/ex01.png';
function convertCanvasToImage(canvas) {
    ctx1.strokeStyle = "#9EAFB9"; ctx1.lineWidth = 7;ctx1.beginPath();ctx1.moveTo(98,110); ctx1.lineTo(187,39);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(98,110); ctx1.lineTo(178,477);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(187,39); ctx1.lineTo(178,477);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(98,110); ctx1.lineTo(103,295);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(178,477); ctx1.lineTo(103,295);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(333,482); ctx1.lineTo(450,82);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(333,482); ctx1.lineTo(348,37);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(450,82); ctx1.lineTo(348,37);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(333,482); ctx1.lineTo(449,312);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(450,82); ctx1.lineTo(449,312);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(188,39); ctx1.lineTo(348,36);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(188,39); ctx1.lineTo(219,24);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(348,36); ctx1.lineTo(219,24);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(219,24); ctx1.lineTo(300,25);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(348,36); ctx1.lineTo(300,25);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(219,24); ctx1.lineTo(260,24);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(300,25); ctx1.lineTo(260,24);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(260,24); ctx1.lineTo(300,25);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(348,36); ctx1.lineTo(300,25);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(181,360); ctx1.lineTo(337,355);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(181,360); ctx1.lineTo(216,318);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(337,355); ctx1.lineTo(216,318);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(216,318); ctx1.lineTo(281,323);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(337,355); ctx1.lineTo(281,323);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(181,360); ctx1.lineTo(275,368);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(337,355); ctx1.lineTo(275,368);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(181,360); ctx1.lineTo(212,364);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(275,368); ctx1.lineTo(212,364);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(212,362); ctx1.lineTo(216,419);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(216,418); ctx1.lineTo(290,414);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(289,413); ctx1.lineTo(313,360);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(224,418); ctx1.lineTo(226,563);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(277,413); ctx1.lineTo(279,562);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(229,562); ctx1.lineTo(277,561);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(211,536); ctx1.lineTo(240,550);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(211,536); ctx1.lineTo(238,465);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(240,550); ctx1.lineTo(238,465);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(211,536); ctx1.lineTo(213,490);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(238,465); ctx1.lineTo(213,490);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(259,464); ctx1.lineTo(285,525);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(259,464); ctx1.lineTo(285,490);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(285,525); ctx1.lineTo(285,490);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(259,464); ctx1.lineTo(261,547);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(285,525); ctx1.lineTo(261,547);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(251,175); ctx1.lineTo(322,171);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(251,175); ctx1.lineTo(289,83);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(322,171); ctx1.lineTo(289,83);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(251,175); ctx1.lineTo(258,126);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(289,83); ctx1.lineTo(258,126);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(289,83); ctx1.lineTo(319,121);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(322,171); ctx1.lineTo(319,121);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(251,175); ctx1.lineTo(288,209);ctx1.stroke();ctx1.beginPath();ctx1.moveTo(322,171); ctx1.lineTo(288,209);ctx1.stroke();
    var image = new Image();
    image.src = c.toDataURL("image/png");
    document.write('<img src="'+image+'"/>');
    return image;
}


function makeHeadImage() {
    return placeADot();
}


function initializeTankList() {
    for(var i = 0; i < playerTanks.length;i++)
    {
        tankImages[i] = makeHeadImage();
        playerTanks[i] = new Array(10);
        botTanks[i] = new Array(10);
        //initializeRules(i);
        initializeTank(i);
    }
}
function initializeTank(s) {
    playerTanks[s][0] = s + 1;
    playerTanks[s][1] = 0;
    playerTanks[s][2] = s;
    playerTanks[s][3] = 0;
    playerTanks[s][4] = 0;
    playerTanks[s][5] = 100;
    switch(playerTanks[s][0]) {
        case(1): playerTanks[s][6] = 10;
            playerTanks[s][7] = 40;
            break;
        case(2): playerTanks[s][6] = 5;
            playerTanks[s][7] = 10;
            break;
        case(3): playerTanks[s][6] = 100;
            playerTanks[s][7] = 5;
            break;
        case(4): playerTanks[s][6] = 5;
            playerTanks[s][7] = 20;
            break;
        case(5): playerTanks[s][6] = 10;
            playerTanks[s][7] = 20;
            break;
    }
    playerTanks[s][8] = 1;
    playerTanks[s][9] = 0;
    playerTanks[s][10] = 80;
    playerTanks[s][11] = 40;
    playerTanks[s][12] = 60;
    playerTanks[s][13] = 50;
    playerTanks[s][14] = 2;

    botTanks[s][0] = s + 1;
    botTanks[s][1] = 100;
    botTanks[s][2] = s;
    botTanks[s][3] = 180;
    botTanks[s][4] = 180;
    botTanks[s][5] = 100;
    botTanks[s][8] = 1;
    switch(botTanks[s][0]) {
        case(1): botTanks[s][6] = 10;
            botTanks[s][7] = 40;
            break;
        case(2): botTanks[s][6] = 5;
            botTanks[s][7] = 10;
            break;
        case(3): botTanks[s][6] = 100;
            botTanks[s][7] = 5;
            break;
        case(4): botTanks[s][6] = 5;
            botTanks[s][7] = 20;
            break;
        case(5): botTanks[s][6] = 5;
            botTanks[s][7] = 20;
            break;
    }
    botTanks[s][9] = 0;
    botTanks[s][10] = 100;
    botTanks[s][11] = 40;
    botTanks[s][12] = 70;
    botTanks[s][13] = 40;
    botTanks[s][14] = 2;
}

initializeTankList();
var tank = new Image();
tank.src = "player/head04.png";
var head = new Image();
head.src = "player/head08.png";

// slightly modified from popsic.io
////////////////////////////////////
var offScreenCanvas = document.createElement('canvas');
var offScreenContext = offScreenCanvas.getContext('2d');
function rotateAndCache(image, angle, w, h, swing1) {
    var size = Math.max(w, h) * Math.sqrt(2);
    offScreenCanvas.width = size;
    offScreenCanvas.height = size;
    offScreenContext.translate(size/2, size/2);
    offScreenContext.rotate(angle);
    offScreenContext.drawImage(image, -w/2, -h/2, w, h);
    document.getElementById("clown").innerHTML = "Hello darkness my old friend";
    return offScreenCanvas;
}
function drawRotated(x, y, image, radians, w, h, proportion, swing1){
    var size = Math.max(w, h) * Math.sqrt(2) * proportion;
    var numbs = size - size/2 - w/2 * proportion;
    var number = size - size/2 - h/2 * proportion;
    var rotatedImage = rotateAndCache(image, radians, w * proportion, h * proportion, swing1);
    ctx.drawImage(rotatedImage, x - numbs - w/2 * proportion, y - number - h/2 * proportion);
}
////////////////////////////////////
function draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var turretx;
    var turrety;
    for(var i = 0; i < playerTanks.length; i++) {
        drawRotated(playerTanks[i][1], playerTanks[i][2], tank, playerTanks[i][3]  * (Math.PI / 180), playerTanks[i][10],
            playerTanks[i][11], playerTanks[i][14], true);
        ctx.beginPath();
        turretx = playerTanks[i][1] + advance * Math.cos(playerTanks[i][3] * (Math.PI / 180));
        turrety = playerTanks[i][2] + advance * Math.sin(playerTanks[i][3]* (Math.PI / 180));

        drawRotated(turretx, turrety, tankImages[i], (playerTanks[i][3] + playerTanks[i][4] ) * (Math.PI / 180),
            playerTanks[i][12], playerTanks[i][13], playerTanks[i][14], false);
        ctx.arc(turretx, turrety, 5, 0, 2*Math.PI, false);
        ctx.stroke();
    }
}
function move(s) {
    if(s.keyCode > 47 && s.keyCode < 53)
        selected = s.keyCode - 48;
    else {
        switch (s.keyCode) {
            case (37): playerTanks[selected][3] = playerTanks[selected][3]-3; break;
            case (38): handleBodyAngleMovement(bodyMovement); break;
            case (39): playerTanks[selected][3] = playerTanks[selected][3]+3; break;
            case (40): handleBodyAngleMovement(-bodyMovement); break;
            case (65): playerTanks[selected][4] = playerTanks[selected][4] - 10; break;
        }
    }

}
function handleBodyAngleMovement(s) {
    playerTanks[selected][1] = playerTanks[selected][1] + s * Math.cos(playerTanks[selected][3]* (Math.PI / 180));
    playerTanks[selected][2] = playerTanks[selected][2] + s * Math.sin(playerTanks[selected][3]* (Math.PI / 180));
}
function start() {
    window.addEventListener("keydown", move, false);
    //window.addEventListener("keyup", move2, false);
    setInterval(draw, 10);
}

window.addEventListener("load", start, false);