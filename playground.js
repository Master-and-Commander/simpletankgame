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

function setEqualTo01(s) {
    s = new Array();
    s[0] = new Array();
    s[0][0]= 161;
    s[0][1]= 67;
    s[0][2]= 0;
    s[0][3] = new Array();
    s[1] = new Array();
    s[1][0] = 0;
    s[1][1] = 127;
    s[1][2] = 58;
    s[1][3] = new Array();
    s[1][4] = 2;
    s[1][5] = new Array();
    s[1][5][0] = 35.17101079013795;
    s[1][5][1] = 3.400363545553491;
    s[1][3][0] = new Array();
    s[1][3][0][0] =  2;
    s[1][3][0][1] =  1;
    s[1][3][0][2] =  1;
    s[1][3][1] = new Array();
    s[1][3][1][0] =  3;
    s[1][3][1][1] =  1;
    s[1][3][1][2] =  1;
    s[2] = new Array();
    s[2][0] = 0;
    s[2][1] = 127;
    s[2][2] = 58;
    s[2][3] = new Array();
    s[2][4] = 0;
    s[2][5] = new Array();
    s[2][5][0] = 35.17101079013795;
    s[2][5][1] = 3.400363545553491;
    s[3] = new Array();
    s[3][0] = 0;
    s[3][1] = 124;
    s[3][2] = 219;
    s[3][3] = new Array();
    s[3][4] = 0;
    s[3][5] = new Array();
    s[3][5][0] = 156.43848631331102;
    s[3][5][1] = 1.8095735190346076;
    s[4] = new Array();
    s[4][0] = 0;
    s[4][1] = 198;
    s[4][2] = 52;
    s[4][3] = new Array();
    s[4][4] = 1;
    s[4][5] = new Array();
    s[4][5][0] = 39.92492955535426;
    s[4][5][1] = -0.3851575063634742;
    s[4][3][0] = new Array();
    s[4][3][0][0] =  5;
    s[4][3][0][1] =  1;
    s[4][3][0][2] =  1;
    s[5] = new Array();
    s[5][0] = 0;
    s[5][1] = 202;
    s[5][2] = 213;
    s[5][3] = new Array();
    s[5][4] = 0;
    s[5][5] = new Array();
    s[5][5][0] = 151.64761785138597;
    s[5][5][1] = 1.2970256223316674;
}




var bullet = new Array();
var bc = 0;
var A  = new Array();
var B  = new Array();
var C  = new Array();
var prop = 1;
var palette = new Array();
palette[1] = "#000000";
var A1  = new Array();
var B1  = new Array();
var C1  = new Array();
function startupFirst() {
    A[0] = new Array();
    A[0][0] = 171;
    A[0][1] = 113;
    A[0][2] = 0;
    A[1] = new Array();
    A[1][0] = 50.774009099144415;
    A[1][1] = 4.151701985401884;
    A[2] = new Array();
    A[2][0] = 59.61543424315552;
    A[2][1] = 1.966877768359204;
    A[3] = new Array();
    A[3][0] = 58.69412236331676;
    A[3][1] = 0.4026546535518728;
    A[4] = new Array();
    A[4][0] = 29.698484809834994;
    A[4][1] = 2.356194490192345;
    A[5] = new Array();
    A[5][0] = 57.584720195551874;
    A[5][1] = -0.3547056520109403;
    A[6] = new Array();
    A[6][0] = 28.0178514522438;
    A[6][1] = 3.7493946497037536;
    A[7] = new Array();
    A[7][0] = 102.07840124139876;
    A[7][1] = 0.03919560192705471;
    A[8] = new Array();
    A[8][0] = 99.12618221237011;
    A[8][1] = 0.5404195002705842;
    A[9] = new Array();
    A[9][0] = 98.41239759298622;
    A[9][1] = -0.44092424815916503;
    A[10] = new Array();
    A[10][0] = 104.01922899156675;
    A[10][1] = 0.019228399099707208;
    B[0]= new Array();
    B[0][0]= new Array();
    B[0][0][0]= 144;
    B[0][0][1]= 70;
    B[0][2] = new Array();
    B[0][3]= 3;
    B[0][2][0] = new Array();
    B[0][2][0][0] = 1;
    B[0][2][0][1] = 1;
    B[0][2][0][2] = 1;
    B[0][2][1] = new Array();
    B[0][2][1][0] = 4;
    B[0][2][1][1] = 1;
    B[0][2][1][2] = 1;
    B[0][2][2] = new Array();
    B[0][2][2][0] = 8;
    B[0][2][2][1] = 1;
    B[0][2][2][2] = 1;
    B[1]= new Array();
    B[1][0]= new Array();
    B[1][0][0]= 148;
    B[1][0][1]= 168;
    B[1][2] = new Array();
    B[1][3]= 3;
    B[1][2][0] = new Array();
    B[1][2][0][0] = 1;
    B[1][2][0][1] = 1;
    B[1][2][0][2] = 1;
    B[1][2][1] = new Array();
    B[1][2][1][0] = 2;
    B[1][2][1][1] = 1;
    B[1][2][1][2] = 1;
    B[1][2][2] = new Array();
    B[1][2][2][0] = 7;
    B[1][2][2][1] = 1;
    B[1][2][2][2] = 1;
    B[2]= new Array();
    B[2][0]= new Array();
    B[2][0][0]= 225;
    B[2][0][1]= 136;
    B[2][2] = new Array();
    B[2][3]= 3;
    B[2][2][0] = new Array();
    B[2][2][0][0] = 2;
    B[2][2][0][1] = 1;
    B[2][2][0][2] = 1;
    B[2][2][1] = new Array();
    B[2][2][1][0] = 3;
    B[2][2][1][1] = 1;
    B[2][2][1][2] = 1;
    B[2][2][2] = new Array();
    B[2][2][2][0] = 6;
    B[2][2][2][1] = 1;
    B[2][2][2][2] = 1;
    B[3]= new Array();
    B[3][0]= new Array();
    B[3][0][0]= 150;
    B[3][0][1]= 134;
    B[3][2] = new Array();
    B[3][3]= 0;
    B[4]= new Array();
    B[4][0]= new Array();
    B[4][0][0]= 225;
    B[4][0][1]= 93;
    B[4][2] = new Array();
    B[4][3]= 2;
    B[4][2][0] = new Array();
    B[4][2][0][0] = 4;
    B[4][2][0][1] = 1;
    B[4][2][0][2] = 1;
    B[4][2][1] = new Array();
    B[4][2][1][0] = 5;
    B[4][2][1][1] = 1;
    B[4][2][1][2] = 1;
    B[5]= new Array();
    B[5][0]= new Array();
    B[5][0][0]= 148;
    B[5][0][1]= 97;
    B[5][2] = new Array();
    B[5][3]= 0;
    B[6]= new Array();
    B[6][0]= new Array();
    B[6][0][0]= 273;
    B[6][0][1]= 117;
    B[6][2] = new Array();
    B[6][3]= 1;
    B[6][2][0] = new Array();
    B[6][2][0][0] = 4;
    B[6][2][0][1] = 1;
    B[6][2][0][2] = 1;
    B[7]= new Array();
    B[7][0]= new Array();
    B[7][0][0]= 256;
    B[7][0][1]= 164;
    B[7][2] = new Array();
    B[7][3]= 2;
    B[7][2][0] = new Array();
    B[7][2][0][0] = 6;
    B[7][2][0][1] = 1;
    B[7][2][0][2] = 1;
    B[7][2][1] = new Array();
    B[7][2][1][0] = 0;
    B[7][2][1][1] = 1;
    B[7][2][1][2] = 1;
    B[8]= new Array();
    B[8][0]= new Array();
    B[8][0][0]= 260;
    B[8][0][1]= 71;
    B[8][2] = new Array();
    B[8][3]= 1;
    B[8][2][0] = new Array();
    B[8][2][0][0] = 9;
    B[8][2][0][1] = 1;
    B[8][2][0][2] = 1;
    B[9]= new Array();
    B[9][0]= new Array();
    B[9][0][0]= 275;
    B[9][0][1]= 115;
    B[9][2] = new Array();
    B[9][3]= 0;

}
function startupBodyFirst() {
    A1[0] = new Array();
    A1[0][0] = 164;
    A1[0][1] = 62;
    A1[0][2] = 0;
    A1[1] = new Array();
    A1[1][0] = 145.79780519610026;
    A1[1][1] = 3.4481599930442175;
    A1[2] = new Array();
    A1[2][0] = 149.91330828182;
    A1[2][1] = -0.30487451954972083;
    A1[3] = new Array();
    A1[3][0] = 155.08062419270823;
    A1[3][1] = 0.3625442372645076;
    A1[4] = new Array();
    A1[4][0] = 150.71164520368026;
    A1[4][1] = 2.680912394930062;
    B1[0]= new Array();
    B1[0][0]= new Array();
    B1[0][0][0]= 25;
    B1[0][0][1]= 18;
    B1[0][2] = new Array();
    B1[0][3]= 1;
    B1[0][2][0] = new Array();
    B1[0][2][0][0] = 1;
    B1[0][2][0][1] = 1;
    B1[0][2][0][2] = 1;
    B1[1]= new Array();
    B1[1][0]= new Array();
    B1[1][0][0]= 307;
    B1[1][0][1]= 17;
    B1[1][2] = new Array();
    B1[1][3]= 1;
    B1[1][2][0] = new Array();
    B1[1][2][0][0] = 2;
    B1[1][2][0][1] = 1;
    B1[1][2][0][2] = 1;
    B1[2]= new Array();
    B1[2][0]= new Array();
    B1[2][0][0]= 309;
    B1[2][0][1]= 117;
    B1[2][2] = new Array();
    B1[2][3]= 1;
    B1[2][2][0] = new Array();
    B1[2][2][0][0] = 3;
    B1[2][2][0][1] = 1;
    B1[2][2][0][2] = 1;
    B1[3]= new Array();
    B1[3][0]= new Array();
    B1[3][0][0]= 29;
    B1[3][0][1]= 129;
    B1[3][2] = new Array();
    B1[3][3]= 1;
    B1[3][2][0] = new Array();
    B1[3][2][0][0] = 0;
    B1[3][2][0][1] = 1;
    B1[3][2][0][2] = 1;


}
function dost() {

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
        ctx.arc(B[i][0][0], B[i][0][1], prop/2, 0, 2 * Math.PI);
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
function reConfigure1() {
    //ctx.fillStyle = "white";
    //ctx.clearRect(0,0, 600, 500);
    for(var i = 0; i < B1.length; i++) {
        B1[i][0][0] = prop * A1[i+1][0] * Math.cos(A1[i+1][1] + A1[0][2]) + A1[0][0];
        B1[i][0][1] = prop * A1[i+1][0] * Math.sin(A1[i+1][1] + A1[0][2]) + A1[0][1];
        ctx.beginPath();
        ctx.arc(B1[i][0][0], B1[i][0][1], prop/2, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    for(var k = 0; k < B1.length; k++) {
        for(var j = 0; j < B1[k][3]; j++) {
            ctx.lineWidth = prop * 4;
            ctx.beginPath();
            ctx.moveTo(B1[k][0][0], B1[k][0][1]);
            ctx.lineWidth =  B1[k][2][j][1];
            ctx.strokeStyle = palette[B1[k][2][j][2]];
            ctx.lineTo(B1[ B1[k][2][j][0] ][0][0],B1[ B1[k][2][j][0] ][0][1]);
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

    A[0][0] = playerTanks[0][1] + advance * Math.cos(playerTanks[0][3] * (Math.PI / 180));
    A[0][1] = playerTanks[0][2] + advance * Math.sin(playerTanks[0][3]* (Math.PI / 180));
    A[0][2] = (playerTanks[0][3] + playerTanks[0][4] ) * (Math.PI / 180);
    for(var i = 0; i < C.length; i++) {
        A[0][15] = new Array();
        A[0][15][0] = C[i][0];
        A[0][15][1] = C[i][1];
    }


    A1[0][0] = playerTanks[0][1];
    A1[0][1] = playerTanks[0][2];
    A1[0][2] = playerTanks[0][3] * (Math.PI / 180);

    reConfigure();
    reConfigure1();

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
        bullet[bc][0] = ;
    }

}

function handleBodyAngleMovement(s) {
    playerTanks[selected][1] = playerTanks[selected][1] + s * Math.cos(playerTanks[selected][3]* (Math.PI / 180));
    playerTanks[selected][2] = playerTanks[selected][2] + s * Math.sin(playerTanks[selected][3]* (Math.PI / 180));
}
function start() {
    startupFirst();
    startupBodyFirst();
    ctx.height = canvas.height;
    ctx.width = canvas.width;
    window.addEventListener("keydown", move, false);
    //window.addEventListener("keyup", move2, false);
    setInterval(draw, 10);

}

window.addEventListener("load", start, false);