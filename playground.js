var canvas = document.getElementById("canvas01");
var ctx = canvas.getContext("2d");
var playerTanks = new Array(5);
var botTanks = new Array(5);
var started = false;
var prop = 2;
var headx = 70;
var heady = 40;
var bodx = 100;
var body = 40;
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
}
initializeTankList();
var tank = new Image();
tank.src = "player/head04.png";
var head = new Image();
head.src = "player/head02.png";
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
    if (!swing1) {
        offScreenContext.drawImage(image, -w/2 + w/5, -h/2, w - w/20, h - h/20 );
    }
    else
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
        drawRotated(playerTanks[i][1], playerTanks[i][2], tank, playerTanks[i][3]  * (Math.PI / 180), bodx, body, prop, true);
        ctx.beginPath();
        turretx = playerTanks[i][1] + advance * Math.cos(playerTanks[i][3] * (Math.PI / 180));
        turrety = playerTanks[i][2] + advance * Math.sin(playerTanks[i][3]* (Math.PI / 180));

        drawRotated(turretx, turrety, head, (playerTanks[i][3] + playerTanks[i][4] ) * (Math.PI / 180), headx, heady, prop, false);
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