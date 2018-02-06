/*
* Rules for tank arrays
* 1: type of tank
*   a: 1 (normal tank)
*   b: 2 (tank with bomb)
*   c: 3 (tank with light saber)
*   d: 4 (tank with four guns)
*   e: 5 (tank that can change locations)
*   f: 100 (dead)
* 2: x coordinate
* 3: y coordinate
* 4: angle of body
* 5: angle of turret
* 6: health
* 7: blast strength
* 8: range
* 9: ability (0: used up, 1: still able)
* 10: (for blast tank): arrays of  bombs
* */
var playerTanks = new Array(5);
var botTanks = new Array(5);
var chosen = 1;


function initializeTankList()
{
    for(var i = 0; i < playerTanks.length;i++)
    {
        playerTanks[i] = new Array(10);
        botTanks[i] = new Array(10);
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
           playerTanks[s][7] = 50;
           break;
       case(3): playerTanks[s][6] = 100;
           playerTanks[s][7] = 5;
           break;
       case(4): playerTanks[s][6] = 5;
           playerTanks[s][7] = 20;
           break;
       case(5): playerTanks[s][6] = 5;
           playerTanks[s][7] = 20;
           break;
   }
   playerTanks[s][8] = 1;

   botTanks[s][0] = s + 1;
   botTanks[s][1] = 0;
   botTanks[s][2] = s;
   botTanks[s][3] = 0;
   botTanks[s][4] = 0;
   botTanks[s][5] = 100;
   botTanks[s][8] = 1;
   switch(botTanks[s][0]) {
        case(1): botTanks[s][6] = 10;
            botTanks[s][7] = 40;
            break;
        case(2): botTanks[s][6] = 5;
            botTanks[s][7] = 50;
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