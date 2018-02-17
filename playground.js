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
* 15: array: blast location
* */
// Organization for projectiles
/*
 * 0: type
 * 1: x
 * 2: y
 * 3: width
 * 4: length
 */
var placements = new Array();
function setEqualTo01(s) {
    placements[s] = new Array();
    placements[s][0] = new Array();
    placements[s][0][0]= 120;
    placements[s][0][1]= 81;
    placements[s][0][2]= 0;
    placements[s][0][3] = new Array();
    placements[s][1] = new Array();
    placements[s][1][0] = 0;
    placements[s][1][1] = 72;
    placements[s][1][2] = 65;
    placements[s][1][3] = new Array();
    placements[s][1][4] = 1;
    placements[s][1][5] = new Array();
    placements[s][1][5][0] = 50.59644256269407;
    placements[s][1][5][1] = 3.4633432079864352;
    placements[s][1][3][0] = new Array();
    placements[s][1][3][0][0] =  2;
    placements[s][1][3][0][1] =  1;
    placements[s][1][3][0][2] =  1;
    placements[s][2] = new Array();
    placements[s][2][0] = 0;
    placements[s][2][1] = 204;
    placements[s][2][2] = 54;
    placements[s][2][3] = new Array();
    placements[s][2][4] = 4;
    placements[s][2][5] = new Array();
    placements[s][2][5][0] = 88.23264701911646;
    placements[s][2][5][1] = -0.31099828060554097;
    placements[s][2][3][0] = new Array();
    placements[s][2][3][0][0] =  3;
    placements[s][2][3][0][1] =  1;
    placements[s][2][3][0][2] =  1;
    placements[s][2][3][1] = new Array();
    placements[s][2][3][1][0] =  4;
    placements[s][2][3][1][1] =  1;
    placements[s][2][3][1][2] =  1;
    placements[s][2][3][2] = new Array();
    placements[s][2][3][2][0] =  5;
    placements[s][2][3][2][1] =  1;
    placements[s][2][3][2][2] =  1;
    placements[s][2][3][3] = new Array();
    placements[s][2][3][3][0] =  6;
    placements[s][2][3][3][1] =  1;
    placements[s][2][3][3][2] =  1;
    placements[s][3] = new Array();
    placements[s][3][0] = 0;
    placements[s][3][1] = 204;
    placements[s][3][2] = 54;
    placements[s][3][3] = new Array();
    placements[s][3][4] = 0;
    placements[s][3][5] = new Array();
    placements[s][3][5][0] = 88.23264701911646;
    placements[s][3][5][1] = -0.31099828060554097;
    placements[s][4] = new Array();
    placements[s][4][0] = 0;
    placements[s][4][1] = 204;
    placements[s][4][2] = 54;
    placements[s][4][3] = new Array();
    placements[s][4][4] = 0;
    placements[s][4][5] = new Array();
    placements[s][4][5][0] = 88.23264701911646;
    placements[s][4][5][1] = -0.31099828060554097;
    placements[s][5] = new Array();
    placements[s][5][0] = 0;
    placements[s][5][1] = 204;
    placements[s][5][2] = 54;
    placements[s][5][3] = new Array();
    placements[s][5][4] = 0;
    placements[s][5][5] = new Array();
    placements[s][5][5][0] = 88.23264701911646;
    placements[s][5][5][1] = -0.31099828060554097;
    placements[s][6] = new Array();
    placements[s][6][0] = 0;
    placements[s][6][1] = 248;
    placements[s][6][2] = 93;
    placements[s][6][3] = new Array();
    placements[s][6][4] = 1;
    placements[s][6][5] = new Array();
    placements[s][6][5][0] = 128.56126943990557;
    placements[s][6][5][1] = 0.09347678115858947;
    placements[s][6][3][0] = new Array();
    placements[s][6][3][0][0] =  7;
    placements[s][6][3][0][1] =  1;
    placements[s][6][3][0][2] =  1;
    placements[s][7] = new Array();
    placements[s][7][0] = 0;
    placements[s][7][1] = 213;
    placements[s][7][2] = 130;
    placements[s][7][3] = new Array();
    placements[s][7][4] = 1;
    placements[s][7][5] = new Array();
    placements[s][7][5][0] = 105.11898020814318;
    placements[s][7][5][1] = 0.4849209950248673;
    placements[s][7][3][0] = new Array();
    placements[s][7][3][0][0] =  8;
    placements[s][7][3][0][1] =  1;
    placements[s][7][3][0][2] =  1;
    placements[s][8] = new Array();
    placements[s][8][0] = 0;
    placements[s][8][1] = 72;
    placements[s][8][2] = 116;
    placements[s][8][3] = new Array();
    placements[s][8][4] = 1;
    placements[s][8][5] = new Array();
    placements[s][8][5][0] = 59.405386961116584;
    placements[s][8][5][1] = 2.511558744043878;
    placements[s][8][3][0] = new Array();
    placements[s][8][3][0][0] =  1;
    placements[s][8][3][0][1] =  1;
    placements[s][8][3][0][2] =  1;
}




var bullet = new Array();
var bc = 0;

var prop = 1;
var palette = new Array();
palette[1] = "#000000";


var canvas = document.getElementById("canvas01");
var ctx = canvas.getContext("2d");
ctx.height = canvas.height;
ctx.width = canvas.width;
function reConfigure(complete) {
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


var playerTanks = new Array(5);
var botTanks = new Array(5);
var started = false;
var advance = -15;
var bodyMovement = 3;
var selected = 0;
function initializeTankList() {
    for(var i = 0; i < playerTanks.length;i++)
    {
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
    playerTanks[s][10] = 100;
    playerTanks[s][11] = 40;
    playerTanks[s][12] = 54;
    playerTanks[s][13] = 48;
    playerTanks[s][14] = 3;
    playerTanks[s][15] = new Array();

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
head.src = "player/turret02.png";
// from popsic.io
////////////////////////////////////
var offScreenCanvas = document.createElement('canvas');
var offScreenContext = offScreenCanvas.getContext('2d');
function rotateAndCache(image, angle, w, h) {
    var size = Math.max(w, h) * Math.sqrt(2);
    offScreenCanvas.width = size;
    offScreenCanvas.height = size;
    offScreenContext.translate(size/2, size/2);
    offScreenContext.rotate(angle);
    offScreenContext.drawImage(image, -w/2, -h/2, w, h);
    document.getElementById("clown").innerHTML = "Hello darkness my old friend";
    return offScreenCanvas;
}
function drawRotated(x, y, image, radians, w, h, proportion){
    var size = Math.max(w, h) * Math.sqrt(2) * proportion;
    var numbs = size - size/2 - w/2 * proportion;
    var number = size - size/2 - h/2 * proportion;
    var rotatedImage = rotateAndCache(image, radians, w * proportion, h * proportion);
    ctx.drawImage(rotatedImage, x - numbs - w/2 * proportion, y - number - h/2 * proportion);
}
////////////////////////////////////
function draw() {
    ctx.fillStyle = "green";

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(head, 100, 100);

    for(var i = 1; i < playerTanks.length; i++) {
        drawRotated(playerTanks[i][1], playerTanks[i][2], tank, playerTanks[i][3]  * (Math.PI / 180), playerTanks[i][10],
            playerTanks[i][11], playerTanks[i][14]);

        placements[i][0][1] = playerTanks[i][2] + advance * Math.sin(playerTanks[i][3]* (Math.PI / 180));
        placements[i][0][0] = playerTanks[i][1] + advance * Math.cos(playerTanks[i][3] * (Math.PI / 180));
        placements[i][0][2] = (playerTanks[i][3] + playerTanks[i][4] ) * (Math.PI / 180);
        reConfigure(placements[i]);
        ctx.beginPath();
        ctx.arc(placements[i][0][0], placements[i][0][1], 5, 0, 2*Math.PI);
        ctx.stroke();

    }

    drawRotated(playerTanks[0][1], playerTanks[0][2], tank, playerTanks[0][3]  * (Math.PI / 180), playerTanks[0][10],
        playerTanks[0][11], playerTanks[0][14]);
    placements[0][0][1] = playerTanks[0][2] + advance * Math.sin(playerTanks[0][3]* (Math.PI / 180));
    placements[0][0][0] = playerTanks[0][1] + advance * Math.cos(playerTanks[0][3] * (Math.PI / 180));
    placements[0][0][2] = (playerTanks[0][3] + playerTanks[0][4] ) * (Math.PI / 180);
    reConfigure(placements[0]);




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
            case (66): fire(selected); break;
        }
    }

}

function fire(s) {
    var strength = playerTanks[s][6];
    var startingx;
    var startingy;
    for (var i = 0; i < playerTanks[s][15].length; i++) {
        startingx = playerTanks[s][15][i][0];
        startingy = playerTanks[s][15][i][1];

        bullet[bc] = new Array();
       // bullet[bc][0] = ;
    }

}

function handleBodyAngleMovement(s) {
    playerTanks[selected][1] = playerTanks[selected][1] + s * Math.cos(playerTanks[selected][3]* (Math.PI / 180));
    playerTanks[selected][2] = playerTanks[selected][2] + s * Math.sin(playerTanks[selected][3]* (Math.PI / 180));
}
function start() {
    placements[0] = new Array();
    placements[1] = new Array();
    placements[2] = new Array();
    placements[3] = new Array();
    placements[4] = new Array();
    setEqualTo01(0);
    setEqualTo01(1);
    setEqualTo01(2);
    setEqualTo01(3);
    setEqualTo01(4);
    ctx.height = canvas.height;
    ctx.width = canvas.width;
    window.addEventListener("keydown", move, false);
    //window.addEventListener("keyup", move2, false);
    setInterval(draw, 10);

}

window.addEventListener("load", start, false);