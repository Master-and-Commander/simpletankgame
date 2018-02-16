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
var A  = new Array();
var B  = new Array();
var C  = new Array();
var prop = 1;
var palette = new Array();
palette[1] = "#000000";
function startupFirst() {
    A [0] = new Array();
    A [0][0] = 161;
    A [0][1] = 185;
    A [0][2] = 0;
    A [1] = new Array();
    A [1][0] = 134.18271125595876;
    A [1][1] = 4.2320762476699425;
    A [2] = new Array();
    A [2][0] = 131.84839779079607;
    A [2][1] = 1.9597532069739034;
    A [3] = new Array();
    A [3][0] = 152.2694979304785;
    A [3][1] = -0.8970810252373478;
    A [4] = new Array();
    A [4][0] = 169.92056967889437;
    A [4][1] = 0.8896216498138072;
    A [5] = new Array();
    A [5][0] = 113.5649593844862;
    A [5][1] = -0.21293834957939717;
    A [6] = new Array();
    A [6][0] = 53.33854141237835;
    A [6][1] = 0.11272761159037757;
    A [7] = new Array();
    A [7][0] = 134.07833531186162;
    A [7][1] = 0.3902013642067572;
    A [8] = new Array();
    A [8][0] = 109.89540481748998;
    A [8][1] = 0.12774098612131257;
    A [9] = new Array();
    A [9][0] = 311.1028768751585;
    A [9][1] = 0.025717801205020742;
    A [10] = new Array();
    A [10][0] = 319.35246985110354;
    A [10][1] = -0.046987333314703957;
    A [11] = new Array();
    A [11][0] = 115.10864433221339;
    A [11][1] = -0.04345089539153084;
    B [0]= new Array();
    B [0][0]= new Array();
    B [0][0][0]= 99;
    B [0][0][1]= 66;
    B [0][2] = new Array();
    B [0][3]= 2;
    B [0][2][0] = new Array();
    B [0][2][0][0] = 1;
    B [0][2][0][1] = 1;
    B [0][2][0][2] = 1;
    B [0][2][1] = new Array();
    B [0][2][1][0] = 2;
    B [0][2][1][1] = 1;
    B [0][2][1][2] = 1;
    B [1]= new Array();
    B [1][0]= new Array();
    B [1][0][0]= 111;
    B [1][0][1]= 307;
    B [1][2] = new Array();
    B [1][3]= 0;
    B [2]= new Array();
    B [2][0]= new Array();
    B [2][0][0]= 256;
    B [2][0][1]= 66;
    B [2][2] = new Array();
    B [2][3]= 1;
    B [2][2][0] = new Array();
    B [2][2][0][0] = 3;
    B [2][2][0][1] = 1;
    B [2][2][0][2] = 1;
    B [3]= new Array();
    B [3][0]= new Array();
    B [3][0][0]= 268;
    B [3][0][1]= 317;
    B [3][2] = new Array();
    B [3][3]= 1;
    B [3][2][0] = new Array();
    B [3][2][0][0] = 1;
    B [3][2][0][1] = 1;
    B [3][2][0][2] = 1;
    B [4]= new Array();
    B [4][0]= new Array();
    B [4][0][0]= 272;
    B [4][0][1]= 161;
    B [4][2] = new Array();
    B [4][3]= 1;
    B [4][2][0] = new Array();
    B [4][2][0][0] = 5;
    B [4][2][0][1] = 1;
    B [4][2][0][2] = 1;
    B [5]= new Array();
    B [5][0]= new Array();
    B [5][0][0]= 214;
    B [5][0][1]= 191;
    B [5][2] = new Array();
    B [5][3]= 1;
    B [5][2][0] = new Array();
    B [5][2][0][0] = 6;
    B [5][2][0][1] = 1;
    B [5][2][0][2] = 1;
    B [6]= new Array();
    B [6][0]= new Array();
    B [6][0][0]= 285;
    B [6][0][1]= 236;
    B [6][2] = new Array();
    B [6][3]= 0;
    B [7]= new Array();
    B [7][0]= new Array();
    B [7][0][0]= 270;
    B [7][0][1]= 199;
    B [7][2] = new Array();
    B [7][3]= 1;
    B [7][2][0] = new Array();
    B [7][2][0][0] = 8;
    B [7][2][0][1] = 1;
    B [7][2][0][2] = 1;
    B [8]= new Array();
    B [8][0]= new Array();
    B [8][0][0]= 472;
    B [8][0][1]= 193;
    B [8][2] = new Array();
    B [8][3]= 2;
    B [8][2][0] = new Array();
    B [8][2][0][0] = 9;
    B [8][2][0][1] = 1;
    B [8][2][0][2] = 1;
    B [8][2][1] = new Array();
    B [8][2][1][0] = 10;
    B [8][2][1][1] = 1;
    B [8][2][1][2] = 1;
    B [9]= new Array();
    B [9][0]= new Array();
    B [9][0][0]= 480;
    B [9][0][1]= 170;
    B [9][2] = new Array();
    B [9][3]= 0;
    B [10]= new Array();
    B [10][0]= new Array();
    B [10][0][0]= 276;
    B [10][0][1]= 180;
    B [10][2] = new Array();
    B [10][3]= 0;

}




var canvas = document.getElementById("canvas01");
var ctx = canvas.getContext("2d");
ctx.height = canvas.height;
ctx.width = canvas.width;
function reConfigure() {
    //ctx.fillStyle = "white";
    //ctx.clearRect(0,0, 600, 500);
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
function makeHeadImage() {

}
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
    var turretx;
    var turrety;

    for(var i = 1; i < playerTanks.length; i++) {
        drawRotated(playerTanks[i][1], playerTanks[i][2], tank, playerTanks[i][3]  * (Math.PI / 180), playerTanks[i][10],
            playerTanks[i][11], playerTanks[i][14]);
        ctx.beginPath();
        turretx = playerTanks[i][1] + advance * Math.cos(playerTanks[i][3] * (Math.PI / 180));
        turrety = playerTanks[i][2] + advance * Math.sin(playerTanks[i][3]* (Math.PI / 180));

        drawRotated(turretx, turrety, head, (playerTanks[i][3] + playerTanks[i][4] ) * (Math.PI / 180),
            playerTanks[i][12], playerTanks[i][13], playerTanks[i][14]);
        ctx.arc(turretx, turrety, 5, 0, 2*Math.PI);
        ctx.stroke();
    }
    drawRotated(playerTanks[0][1], playerTanks[0][2], tank, playerTanks[0][3]  * (Math.PI / 180), playerTanks[0][10],
        playerTanks[0][11], playerTanks[0][14]);
    ctx.beginPath();
    A[0][0] = playerTanks[0][1] + advance * Math.cos(playerTanks[0][3] * (Math.PI / 180));
    A[0][1] = playerTanks[0][2] + advance * Math.sin(playerTanks[0][3]* (Math.PI / 180));
    A[0][2] = (playerTanks[0][3] + playerTanks[0][4] ) * (Math.PI / 180);
    reConfigure();

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
    startupFirst();
    ctx.height = canvas.height;
    ctx.width = canvas.width;
    window.addEventListener("keydown", move, false);
    //window.addEventListener("keyup", move2, false);
    setInterval(draw, 10);

}

window.addEventListener("load", start, false);