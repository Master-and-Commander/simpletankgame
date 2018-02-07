var canvas = document.getElementById("canvas01");
var ctx = canvas.getContext("2d");
var playerTanks = new Array(5);
var botTanks = new Array(5);
var started = false;

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
tank.src = "player/samp.png";
var selected = 0;
var offScreenCanvas = document.createElement('canvas');
var offScreenContext = offScreenCanvas.getContext('2d');

// from popsic.io

function rotateAndCache(image, angle, w, h) {

    var size = Math.max(w, h) * Math.sqrt(2);
    offScreenCanvas.width = size;
    offScreenCanvas.height = size;
    offScreenContext.translate(size/2, size/2);
    offScreenContext.rotate(angle);
    offScreenContext.drawImage(image, -w/2, -h/2, w, h);
    //document.getElementById("peasant").innerHTML = ;
    return offScreenCanvas;
}


function drawRotated(x, y, image, radians, width, height){

    var rotatedImage = rotateAndCache(image, radians, width, height);
    ctx.drawImage(rotatedImage, x - 30 - image.width/2, y - 55 - image.height/2);
}


function draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawRotated(playerTanks[selected][1], playerTanks[selected][2], tank, playerTanks[0][3]  * (Math.PI / 180), tank.width, tank.height);

    document.getElementById("clown").innerHTML = playerTanks[0][3] + " x " +
        playerTanks[selected][1]+ " y " + playerTanks[selected][2];
    ctx.beginPath();
    ctx.arc(playerTanks[selected][1], playerTanks[selected][2], 5, 0, 2*Math.PI, false);
    ctx.stroke();

}


function move(s) {
    switch (s.keyCode) {
        case (37): playerTanks[selected][3] = playerTanks[selected][3]-3; break;
        case (38): handleBodyAngleMovement(1); break;
        case (39): playerTanks[selected][3] = playerTanks[selected][3]+3; break;
        case (40): handleBodyAngleMovement(-1); break;
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