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

var testx1 = 180;
var testy1 = 300;
var testx2 = 173;
var testy2 = 300;
var placements = new Array();
var placementsbody = new Array();
function setEqualTo02(s) {
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
function setEqualTo03(s) {
    placements[s] = new Array();
    placements[s][0] = new Array();
    placements[s][0][0]= 258;
    placements[s][0][1]= 198;
    placements[s][0][2]= 0;
    placements[s][0][3] = new Array();
    placements[s][0][4] = new Array();
    placements[s][0][5] = new Array();
    placements[s][0][3][0]= 26;
    placements[s][1] = new Array();
    placements[s][1][0] = 1;
    placements[s][1][1] = new Array();
    placements[s][1][1][0] = new Array();
    placements[s][1][1][0][0] = new Array();
    placements[s][1][1][0][0][0] = 177.99999999999971;
    placements[s][1][1][0][0][1] = 169.5000000000008;
    placements[s][1][1][0][1] = 84.92496688253696;
    placements[s][1][1][0][2] = 3.483824514968213;
    placements[s][1][1][1] = new Array();
    placements[s][1][1][1][0] = new Array();
    placements[s][1][1][1][0][0] = 178.00000000000028;
    placements[s][1][1][1][0][1] = 229.50000000000077;
    placements[s][1][1][1][1] = 85.97819491010499;
    placements[s][1][1][1][2] = 2.7664857920374892;
    placements[s][1][1][2] = new Array();
    placements[s][1][1][2][0] = new Array();
    placements[s][1][1][2][0][0] = 228.00000000000048;
    placements[s][1][1][2][0][1] = 249.5000000000003;
    placements[s][1][1][2][1] = 59.60075502877462;
    placements[s][1][1][2][2] = 2.0982669105603473;
    placements[s][1][1][3] = new Array();
    placements[s][1][1][3][0] = new Array();
    placements[s][1][1][3][0][0] = 288.00000000000045;
    placements[s][1][1][3][0][1] = 249.49999999999974;
    placements[s][1][1][3][1] = 59.6007550287746;
    placements[s][1][1][3][2] = 1.0433257430294273;
    placements[s][1][1][4] = new Array();
    placements[s][1][1][4][0] = new Array();
    placements[s][1][1][4][0][0] = 358.00000000000034;
    placements[s][1][1][4][0][1] = 229.49999999999906;
    placements[s][1][1][4][1] = 104.84393163173541;
    placements[s][1][1][4][2] = 0.3051608246158506;
    placements[s][1][1][5] = new Array();
    placements[s][1][1][5][0] = new Array();
    placements[s][1][1][5][0][0] = 278.0000000000001;
    placements[s][1][1][5][0][1] = 209.49999999999983;
    placements[s][1][1][5][1] = 23.07054399011867;
    placements[s][1][1][5][2] = 0.5218342798144016;
    placements[s][1][1][6] = new Array();
    placements[s][1][1][6][0] = new Array();
    placements[s][1][1][6][0][0] = 277.99999999999994;
    placements[s][1][1][6][0][1] = 189.49999999999983;
    placements[s][1][1][6][1] = 21.731313812100744;
    placements[s][1][1][6][2] = -0.40187064744046474;
    placements[s][1][1][7] = new Array();
    placements[s][1][1][7][0] = new Array();
    placements[s][1][1][7][0][0] = 357.9999999999997;
    placements[s][1][1][7][0][1] = 169.49999999999906;
    placements[s][1][1][7][1] = 103.98196959088626;
    placements[s][1][1][7][2] = -0.27763915711966563;
    placements[s][1][1][8] = new Array();
    placements[s][1][1][8][0] = new Array();
    placements[s][1][1][8][0][0] = 287.99999999999954;
    placements[s][1][1][8][0][1] = 149.49999999999974;
    placements[s][1][1][8][1] = 57.028501646106726;
    placements[s][1][1][8][2] = -1.016843818153878;
    placements[s][1][1][9] = new Array();
    placements[s][1][1][9][0] = new Array();
    placements[s][1][1][9][0][0] = 227.9999999999995;
    placements[s][1][1][9][0][1] = 149.5000000000003;
    placements[s][1][1][9][1] = 57.02850164610675;
    placements[s][1][1][9][2] = 4.158436471743651;
    placements[s][1][2] = new Array();
    placements[s][1][2][0] = 2;
    placements[s][1][2][1] = 0;
    placements[s][2] = new Array();
    placements[s][2][0] = 1;
    placements[s][2][1] = new Array();
    placements[s][2][1][0] = new Array();
    placements[s][2][1][0][0] = new Array();
    placements[s][2][1][0][0][0] = 368.0000000000001;
    placements[s][2][1][0][0][1] = 209.49999999999895;
    placements[s][2][1][0][1] = 110.59950271135943;
    placements[s][2][1][0][2] = 0.10416704769944944;
    placements[s][2][1][1] = new Array();
    placements[s][2][1][1][0] = new Array();
    placements[s][2][1][1][0][0] = 318.0000000000002;
    placements[s][2][1][1][0][1] = 219.49999999999943;
    placements[s][2][1][1][1] = 63.73578272838581;
    placements[s][2][1][1][2] = 0.34407934899980114;
    placements[s][2][1][2] = new Array();
    placements[s][2][1][2][0] = new Array();
    placements[s][2][1][2][0][0] = 278.0000000000001;
    placements[s][2][1][2][0][1] = 209.49999999999983;
    placements[s][2][1][2][1] = 23.07054399011867;
    placements[s][2][1][2][2] = 0.5218342798144016;
    placements[s][2][2] = new Array();
    placements[s][2][2][0] = 6;
    placements[s][2][2][1] = 0;
    placements[s][3] = new Array();
    placements[s][3][0] = 1;
    placements[s][3][1] = new Array();
    placements[s][3][1][0] = new Array();
    placements[s][3][1][0][0] = new Array();
    placements[s][3][1][0][0][0] = 367.99999999999994;
    placements[s][3][1][0][0][1] = 189.49999999999903;
    placements[s][3][1][0][1] = 110.32792031031856;
    placements[s][3][1][0][2] = -0.07711947554497916;
    placements[s][3][1][1] = new Array();
    placements[s][3][1][1][0] = new Array();
    placements[s][3][1][1][0][0] = 277.99999999999994;
    placements[s][3][1][1][0][1] = 189.49999999999983;
    placements[s][3][1][1][1] = 21.731313812100744;
    placements[s][3][1][1][2] = -0.40187064744046474;
    placements[s][3][1][2] = new Array();
    placements[s][3][1][2][0] = new Array();
    placements[s][3][1][2][0][0] = 317.99999999999983;
    placements[s][3][1][2][0][1] = 179.4999999999995;
    placements[s][3][1][2][1] = 62.7873394881484;
    placements[s][3][1][2][2] = -0.2990844116129664;
    placements[s][3][2] = new Array();
    placements[s][3][2][0] = 6;
    placements[s][3][2][1] = 0;
    placements[s][4] = new Array();
    placements[s][4][0] = 1;
    placements[s][4][1] = new Array();
    placements[s][4][1][0] = new Array();
    placements[s][4][1][0][0] = new Array();
    placements[s][4][1][0][0][0] = 278.0000000000001;
    placements[s][4][1][0][0][1] = 209.49999999999983;
    placements[s][4][1][0][1] = 23.07054399011867;
    placements[s][4][1][0][2] = 0.5218342798144016;
    placements[s][4][1][1] = new Array();
    placements[s][4][1][1][0] = new Array();
    placements[s][4][1][1][0][0] = 408.00000000000005;
    placements[s][4][1][1][0][1] = 209.49999999999855;
    placements[s][4][1][1][1] = 150.4401874500294;
    placements[s][4][1][1][2] = 0.0765169843163295;
    placements[s][4][1][2] = new Array();
    placements[s][4][1][2][0] = new Array();
    placements[s][4][1][2][0][0] = 407.9999999999999;
    placements[s][4][1][2][0][1] = 189.49999999999858;
    placements[s][4][1][2][1] = 150.2406403074747;
    placements[s][4][1][2][2] = -0.05660612893897707;
    placements[s][4][1][3] = new Array();
    placements[s][4][1][3][0] = new Array();
    placements[s][4][1][3][0][0] = 277.99999999999994;
    placements[s][4][1][3][0][1] = 189.49999999999983;
    placements[s][4][1][3][1] = 21.731313812100744;
    placements[s][4][1][3][2] = -0.40187064744046474;
    placements[s][4][2] = new Array();
    placements[s][4][2][0] = 2;
    placements[s][4][2][1] = 0;
    placements[s][5] = new Array();
    placements[s][5][0] = 1;
    placements[s][5][1] = new Array();
    placements[s][5][1][0] = new Array();
    placements[s][5][1][0][0] = new Array();
    placements[s][5][1][0][0][0] = 278.0000000000001;
    placements[s][5][1][0][0][1] = 209.49999999999983;
    placements[s][5][1][0][1] = 23.07054399011867;
    placements[s][5][1][0][2] = 0.5218342798144016;
    placements[s][5][1][1] = new Array();
    placements[s][5][1][1][0] = new Array();
    placements[s][5][1][1][0][0] = 277.99999999999994;
    placements[s][5][1][1][0][1] = 189.49999999999983;
    placements[s][5][1][1][1] = 21.731313812100744;
    placements[s][5][1][1][2] = -0.40187064744046474;
    placements[s][5][1][2] = new Array();
    placements[s][5][1][2][0] = new Array();
    placements[s][5][1][2][0][0] = 291.5;
    placements[s][5][1][2][0][1] = 198.49999999999971;
    placements[s][5][1][2][1] = 33.50373113550191;
    placements[s][5][1][2][2] = 0.014924264990076504;
    placements[s][5][2] = new Array();
    placements[s][5][2][0] = 5;
    placements[s][5][2][1] = 0;
    placements[s][6] = new Array();
    placements[s][6][0] = 1;
    placements[s][6][1] = new Array();
    placements[s][6][1][0] = new Array();
    placements[s][6][1][0][0] = new Array();
    placements[s][6][1][0][0][0] = 278.00000000000045;
    placements[s][6][1][0][0][1] = 249.49999999999983;
    placements[s][6][1][0][1] = 55.24717187331855;
    placements[s][6][1][0][2] = 1.2003736415093124;
    placements[s][6][1][1] = new Array();
    placements[s][6][1][1][0] = new Array();
    placements[s][6][1][1][0][0] = 288.00000000000045;
    placements[s][6][1][1][0][1] = 249.49999999999974;
    placements[s][6][1][1][1] = 59.6007550287746;
    placements[s][6][1][1][2] = 1.0433257430294273;
    placements[s][6][1][2] = new Array();
    placements[s][6][1][2][0] = new Array();
    placements[s][6][1][2][0][0] = 358.00000000000034;
    placements[s][6][1][2][0][1] = 229.49999999999906;
    placements[s][6][1][2][1] = 104.84393163173541;
    placements[s][6][1][2][2] = 0.3051608246158506;
    placements[s][6][2] = new Array();
    placements[s][6][2][0] = 1;
    placements[s][6][2][1] = 0;
    placements[s][7] = new Array();
    placements[s][7][0] = 1;
    placements[s][7][1] = new Array();
    placements[s][7][1][0] = new Array();
    placements[s][7][1][0][0] = new Array();
    placements[s][7][1][0][0][0] = 287.99999999999954;
    placements[s][7][1][0][0][1] = 149.49999999999974;
    placements[s][7][1][0][1] = 57.028501646106726;
    placements[s][7][1][0][2] = -1.016843818153878;
    placements[s][7][1][1] = new Array();
    placements[s][7][1][1][0] = new Array();
    placements[s][7][1][1][0][0] = 277.99999999999954;
    placements[s][7][1][1][0][1] = 149.49999999999983;
    placements[s][7][1][1][1] = 52.461890930464925;
    placements[s][7][1][1][2] = -1.1796708798258768;
    placements[s][7][1][2] = new Array();
    placements[s][7][1][2][0] = new Array();
    placements[s][7][1][2][0][0] = 357.9999999999997;
    placements[s][7][1][2][0][1] = 169.49999999999906;
    placements[s][7][1][2][1] = 103.98196959088626;
    placements[s][7][1][2][2] = -0.27763915711966563;
    placements[s][7][2] = new Array();
    placements[s][7][2][0] = 1;
    placements[s][7][2][1] = 0;
    placements[s][8] = new Array();
    placements[s][8][0] = 1;
    placements[s][8][1] = new Array();
    placements[s][8][1][0] = new Array();
    placements[s][8][1][0][0] = new Array();
    placements[s][8][1][0][0][0] = 278.0000000000001;
    placements[s][8][1][0][0][1] = 209.49999999999983;
    placements[s][8][1][0][1] = 23.07054399011867;
    placements[s][8][1][0][2] = 0.5218342798144016;
    placements[s][8][1][1] = new Array();
    placements[s][8][1][1][0] = new Array();
    placements[s][8][1][1][0][0] = 284.00000000000005;
    placements[s][8][1][1][0][1] = 202.99999999999977;
    placements[s][8][1][1][1] = 26.476404589747467;
    placements[s][8][1][1][2] = 0.18998828791870687;
    placements[s][8][1][2] = new Array();
    placements[s][8][1][2][0] = new Array();
    placements[s][8][1][2][0][0] = 408.00000000000005;
    placements[s][8][1][2][0][1] = 209.49999999999855;
    placements[s][8][1][2][1] = 150.4401874500294;
    placements[s][8][1][2][2] = 0.0765169843163295;
    placements[s][8][2] = new Array();
    placements[s][8][2][0] = 1;
    placements[s][8][2][1] = 0;
    placements[s][9] = new Array();
    placements[s][9][0] = 1;
    placements[s][9][1] = new Array();
    placements[s][9][1][0] = new Array();
    placements[s][9][1][0][0] = new Array();
    placements[s][9][1][0][0][0] = 277.99999999999994;
    placements[s][9][1][0][0][1] = 189.49999999999983;
    placements[s][9][1][0][1] = 21.731313812100744;
    placements[s][9][1][0][2] = -0.40187064744046474;
    placements[s][9][1][1] = new Array();
    placements[s][9][1][1][0] = new Array();
    placements[s][9][1][1][0][0] = 282.99999999999994;
    placements[s][9][1][1][0][1] = 192.99999999999977;
    placements[s][9][1][1][1] = 25.495097567963913;
    placements[s][9][1][1][2] = -0.19739555984988996;
    placements[s][9][1][2] = new Array();
    placements[s][9][1][2][0] = new Array();
    placements[s][9][1][2][0][0] = 407.9999999999999;
    placements[s][9][1][2][0][1] = 189.49999999999858;
    placements[s][9][1][2][1] = 150.2406403074747;
    placements[s][9][1][2][2] = -0.05660612893897707;
    placements[s][9][2] = new Array();
    placements[s][9][2][0] = 1;
    placements[s][9][2][1] = 0;
    placements[s][10] = new Array();
    placements[s][10][0] = 1;
    placements[s][10][1] = new Array();
    placements[s][10][1][0] = new Array();
    placements[s][10][1][0][0] = new Array();
    placements[s][10][1][0][0][0] = 298.0000000000003;
    placements[s][10][1][0][0][1] = 229.49999999999966;
    placements[s][10][1][0][1] = 50.91414341811125;
    placements[s][10][1][0][2] = 0.6670723808919066;
    placements[s][10][1][1] = new Array();
    placements[s][10][1][1][0] = new Array();
    placements[s][10][1][1][0][0] = 198.00000000000028;
    placements[s][10][1][1][0][1] = 229.5000000000006;
    placements[s][10][1][1][1] = 67.76614198845912;
    placements[s][10][1][1][2] = 2.6581456520225845;
    placements[s][10][1][2] = new Array();
    placements[s][10][1][2][0] = new Array();
    placements[s][10][1][2][0][0] = 168.0000000000004;
    placements[s][10][1][2][0][1] = 239.5000000000009;
    placements[s][10][1][2][1] = 99.10726512218973;
    placements[s][10][1][2][2] = 2.7095372388221395;
    placements[s][10][1][3] = new Array();
    placements[s][10][1][3][0] = new Array();
    placements[s][10][1][3][0][0] = 168.00000000000057;
    placements[s][10][1][3][0][1] = 259.50000000000085;
    placements[s][10][1][3][1] = 109.00573379414499;
    placements[s][10][1][3][2] = 2.5421401687480465;
    placements[s][10][1][4] = new Array();
    placements[s][10][1][4][0] = new Array();
    placements[s][10][1][4][0][0] = 238.0000000000006;
    placements[s][10][1][4][0][1] = 259.5000000000002;
    placements[s][10][1][4][1] = 64.67031776634474;
    placements[s][10][1][4][2] = 1.885212049406566;
    placements[s][10][2] = new Array();
    placements[s][10][2][0] = 4;
    placements[s][10][2][1] = 1;
    placements[s][11] = new Array();
    placements[s][11][0] = 1;
    placements[s][11][1] = new Array();
    placements[s][11][1][0] = new Array();
    placements[s][11][1][0][0] = new Array();
    placements[s][11][1][0][0][0] = 297.9999999999997;
    placements[s][11][1][0][0][1] = 169.49999999999963;
    placements[s][11][1][0][1] = 49.114661762044115;
    placements[s][11][1][0][2] = -0.6190660545826376;
    placements[s][11][1][1] = new Array();
    placements[s][11][1][1][0] = new Array();
    placements[s][11][1][1][0][0] = 197.9999999999997;
    placements[s][11][1][1][0][1] = 169.50000000000065;
    placements[s][11][1][1][1] = 66.42476947645359;
    placements[s][11][1][1][2] = 3.5850409900095203;
    placements[s][11][1][2] = new Array();
    placements[s][11][1][2][0] = new Array();
    placements[s][11][1][2][0][0] = 167.9999999999996;
    placements[s][11][1][2][0][1] = 159.5000000000009;
    placements[s][11][1][2][1] = 97.8889677134252;
    placements[s][11][1][2][2] = 3.5458137491638952;
    placements[s][11][1][3] = new Array();
    placements[s][11][1][3][0] = new Array();
    placements[s][11][1][3][0][0] = 167.99999999999946;
    placements[s][11][1][3][0][1] = 139.50000000000085;
    placements[s][11][1][3][1] = 107.34174397688906;
    placements[s][11][1][3][2] = 3.7179678741809674;
    placements[s][11][1][4] = new Array();
    placements[s][11][1][4][0] = new Array();
    placements[s][11][1][4][0][0] = 237.9999999999995;
    placements[s][11][1][4][0][1] = 139.50000000000017;
    placements[s][11][1][4][1] = 61.824347954507374;
    placements[s][11][1][4][2] = 4.382965942272533;
    placements[s][11][2] = new Array();
    placements[s][11][2][0] = 4;
    placements[s][11][2][1] = 1;
    placements[s][12] = new Array();
    placements[s][12][0] = 0;
    placements[s][12][1] = 178;
    placements[s][12][2] = 199.50000000000077;
    placements[s][12][3] = new Array();
    placements[s][12][4] = 1;
    placements[s][12][5] = new Array();
    placements[s][12][5][0] = 80.01406126425532;
    placements[s][12][5][1] = 3.122844850392039;
    placements[s][12][3][0] = new Array();
    placements[s][12][3][0][0] =  13;
    placements[s][12][3][0][1] =  1;
    placements[s][12][3][0][2] =  6;
    placements[s][13] = new Array();
    placements[s][13][0] = 0;
    placements[s][13][1] = 197;
    placements[s][13][2] = 200.50000000000068;
    placements[s][13][3] = new Array();
    placements[s][13][4] = 0;
    placements[s][13][5] = new Array();
    placements[s][13][5][0] = 61.05120801425639;
    placements[s][13][5][1] = 3.1006319700554665;
    placements[s][14] = new Array();
    placements[s][14][0] = 0;
    placements[s][14][1] = 268.0000000000004;
    placements[s][14][2] = 239.49999999999994;
    placements[s][14][3] = new Array();
    placements[s][14][4] = 1;
    placements[s][14][5] = new Array();
    placements[s][14][5][0] = 42.687820276983025;
    placements[s][14][5][1] = 1.33434018459497;
    placements[s][14][3][0] = new Array();
    placements[s][14][3][0][0] =  15;
    placements[s][14][3][0][1] =  1;
    placements[s][14][3][0][2] =  2;
    placements[s][15] = new Array();
    placements[s][15][0] = 0;
    placements[s][15][1] = 198.00000000000034;
    placements[s][15][2] = 239.00000000000057;
    placements[s][15][3] = new Array();
    placements[s][15][4] = 1;
    placements[s][15][5] = new Array();
    placements[s][15][5][0] = 72.67048919609668;
    placements[s][15][5][1] = 2.5421401687480465;
    placements[s][15][3][0] = new Array();
    placements[s][15][3][0][0] =  16;
    placements[s][15][3][0][1] =  1;
    placements[s][15][3][0][2] =  2;
    placements[s][16] = new Array();
    placements[s][16][0] = 0;
    placements[s][16][1] = 173.00000000000054;
    placements[s][16][2] = 259.0000000000008;
    placements[s][16][3] = new Array();
    placements[s][16][4] = 0;
    placements[s][16][5] = new Array();
    placements[s][16][5][0] = 104.62313319720455;
    placements[s][16][5][1] = 2.5191209490427084;
    placements[s][17] = new Array();
    placements[s][17][0] = 0;
    placements[s][17][1] = 258.0000000000005;
    placements[s][17][2] = 249.5;
    placements[s][17][3] = new Array();
    placements[s][17][4] = 1;
    placements[s][17][5] = new Array();
    placements[s][17][5][0] = 51.5;
    placements[s][17][5][1] = 1.5707963267948867;
    placements[s][17][3][0] = new Array();
    placements[s][17][3][0][0] =  18;
    placements[s][17][3][0][1] =  1;
    placements[s][17][3][0][2] =  2;
    placements[s][18] = new Array();
    placements[s][18][0] = 0;
    placements[s][18][1] = 198.00000000000048;
    placements[s][18][2] = 249.00000000000062;
    placements[s][18][3] = new Array();
    placements[s][18][4] = 1;
    placements[s][18][5] = new Array();
    placements[s][18][5][0] = 78.74642849044015;
    placements[s][18][5][1] = 2.437098589347565;
    placements[s][18][3][0] = new Array();
    placements[s][18][3][0][0] =  19;
    placements[s][18][3][0][1] =  1;
    placements[s][18][3][0][2] =  2;
    placements[s][19] = new Array();
    placements[s][19][0] = 0;
    placements[s][19][1] = 188.50000000000057;
    placements[s][19][2] = 258.5000000000007;
    placements[s][19][3] = new Array();
    placements[s][19][4] = 0;
    placements[s][19][5] = new Array();
    placements[s][19][5][0] = 92.14390918557777;
    placements[s][19][5][1] = 2.4253149710395174;
    placements[s][20] = new Array();
    placements[s][20][0] = 0;
    placements[s][20][1] = 267.99999999999966;
    placements[s][20][2] = 159.49999999999994;
    placements[s][20][3] = new Array();
    placements[s][20][4] = 2;
    placements[s][20][5] = new Array();
    placements[s][20][5][0] = 39.777506206397575;
    placements[s][20][5][1] = -1.3166715772392712;
    placements[s][20][3][0] = new Array();
    placements[s][20][3][0][0] =  21;
    placements[s][20][3][0][1] =  1;
    placements[s][20][3][0][2] =  2;
    placements[s][20][3][1] = new Array();
    placements[s][20][3][1][0] =  22;
    placements[s][20][3][1][1] =  1;
    placements[s][20][3][1][2] =  2;
    placements[s][21] = new Array();
    placements[s][21][0] = 0;
    placements[s][21][1] = 197.4999999999997;
    placements[s][21][2] = 159.50000000000048;
    placements[s][21][3] = new Array();
    placements[s][21][4] = 0;
    placements[s][21][5] = new Array();
    placements[s][21][5][0] = 71.71122645722913;
    placements[s][21][5][1] = 3.7083218711132915;
    placements[s][22] = new Array();
    placements[s][22][0] = 0;
    placements[s][22][1] = 172.9999999999995;
    placements[s][22][2] = 140.0000000000008;
    placements[s][22][3] = new Array();
    placements[s][22][4] = 0;
    placements[s][22][5] = new Array();
    placements[s][22][5][0] = 102.9028668210949;
    placements[s][22][5][1] = 3.740376510555767;
    placements[s][23] = new Array();
    placements[s][23][0] = 0;
    placements[s][23][1] = 213.4999999999995;
    placements[s][23][2] = 148.50000000000048;
    placements[s][23][3] = new Array();
    placements[s][23][4] = 1;
    placements[s][23][5] = new Array();
    placements[s][23][5][0] = 66.56200117183977;
    placements[s][23][5][1] = 3.9801322258321665;
    placements[s][23][3][0] = new Array();
    placements[s][23][3][0][0] =  24;
    placements[s][23][3][0][1] =  1;
    placements[s][23][3][0][2] =  2;
    placements[s][24] = new Array();
    placements[s][24][0] = 0;
    placements[s][24][1] = 176.99999999999957;
    placements[s][24][2] = 159.00000000000088;
    placements[s][24][3] = new Array();
    placements[s][24][4] = 0;
    placements[s][24][5] = new Array();
    placements[s][24][5][0] = 89.89994438263018;
    placements[s][24][5][1] = 3.5903159976005034;
    placements[s][25] = new Array();
    placements[s][25][0] = 1;
    placements[s][25][1] = new Array();
    placements[s][25][1][0] = new Array();
    placements[s][25][1][0][0] = new Array();
    placements[s][25][1][0][0][0] = 218.0000000000001;
    placements[s][25][1][0][0][1] = 209.50000000000043;
    placements[s][25][1][0][1] = 41.62030754331352;
    placements[s][25][1][0][2] = 2.8616428310659913;
    placements[s][25][1][1] = new Array();
    placements[s][25][1][1][0] = new Array();
    placements[s][25][1][1][0][0] = 217.99999999999994;
    placements[s][25][1][1][0][1] = 189.5000000000004;
    placements[s][25][1][1][1] = 40.893153461184646;
    placements[s][25][1][1][2] = 3.350978046543279;
    placements[s][25][1][2] = new Array();
    placements[s][25][1][2][0] = new Array();
    placements[s][25][1][2][0][0] = 247.99999999999991;
    placements[s][25][1][2][0][1] = 189.5000000000001;
    placements[s][25][1][2][1] = 13.124404748406679;
    placements[s][25][1][2][2] = 3.846086717832;
    placements[s][25][1][3] = new Array();
    placements[s][25][1][3][0] = new Array();
    placements[s][25][1][3][0][0] = 258;
    placements[s][25][1][3][0][1] = 199.50000000000003;
    placements[s][25][1][3][1] = 1.5000000000000284;
    placements[s][25][1][3][2] = 1.5707963267948965;
    placements[s][25][1][4] = new Array();
    placements[s][25][1][4][0] = new Array();
    placements[s][25][1][4][0][0] = 248.00000000000008;
    placements[s][25][1][4][0][1] = 209.5000000000001;
    placements[s][25][1][4][1] = 15.2397506541282;
    placements[s][25][1][4][2] = 2.2865399164637674;
    placements[s][25][2] = new Array();
    placements[s][25][2][0] = 3;
    placements[s][25][2][1] = 0;
    placements[s][26] = new Array();
    placements[s][26][0] = 2;
    placements[s][26][1] = 276;
    placements[s][26][2] = 198;
    placements[s][26][3] = 0;
    placements[s][26][4] = 0;
}
function setEqualTo01(s) {
    placements[s] = new Array();
    placements[s][0] = new Array();
    placements[s][0][0]= 246;
    placements[s][0][1]= 186;
    placements[s][0][2]= 0;
    placements[s][0][3] = new Array();
    placements[s][0][4] = new Array();
    placements[s][0][5] = new Array();
    placements[s][0][4][0]= new Array();
    placements[s][0][4][0][0]= new Array();
    placements[s][0][4][0][0][0]= 180;
    placements[s][0][4][0][0][1]= 70;
    placements[s][0][4][0][1]= 133.46160496562297;
    placements[s][0][4][0][2]= 4.195101600057068;
    placements[s][0][4][1]= new Array();
    placements[s][0][4][1][0]= new Array();
    placements[s][0][4][1][0][0]= 173;
    placements[s][0][4][1][0][1]= 340;
    placements[s][0][4][1][1]= 170.42593699317015;
    placements[s][0][4][1][2]= 2.01344964549423;
    placements[s][0][4][2]= new Array();
    placements[s][0][4][2][0]= new Array();
    placements[s][0][4][2][0][0]= 413;
    placements[s][0][4][2][0][1]= 252;
    placements[s][0][4][2][1]= 179.56892826989863;
    placements[s][0][4][2][2]= 0.3763698960513447;
    placements[s][0][4][3]= new Array();
    placements[s][0][4][3][0]= new Array();
    placements[s][0][4][3][0][0]= 382;
    placements[s][0][4][3][0][1]= 108;
    placements[s][0][4][3][1]= 156.7801007781281;
    placements[s][0][4][3][2]= -0.5207283914070707;
    placements[s][1] = new Array();
    placements[s][1][0] = 1;
    placements[s][1][1] = new Array();
    placements[s][1][1][0] = new Array();
    placements[s][1][1][0][0] = new Array();
    placements[s][1][1][0][0][0] = 171;
    placements[s][1][1][0][0][1] = 339;
    placements[s][1][1][0][1] = 170.3936618539551;
    placements[s][1][1][0][2] = 2.026570082771602;
    placements[s][1][1][1] = new Array();
    placements[s][1][1][1][0] = new Array();
    placements[s][1][1][1][0][0] = 415;
    placements[s][1][1][1][0][1] = 251;
    placements[s][1][1][1][1] = 181.06904760339356;
    placements[s][1][1][1][2] = 0.3671738338182192;
    placements[s][1][1][2] = new Array();
    placements[s][1][1][2][0] = new Array();
    placements[s][1][1][2][0][0] = 383;
    placements[s][1][1][2][0][1] = 108;
    placements[s][1][1][2][1] = 157.64834283937145;
    placements[s][1][1][2][2] = -0.5175725514225525;
    placements[s][1][1][3] = new Array();
    placements[s][1][1][3][0] = new Array();
    placements[s][1][1][3][0][0] = 178;
    placements[s][1][1][3][0][1] = 70;
    placements[s][1][1][3][1] = 134.46189051177288;
    placements[s][1][1][3][2] = 4.182173207608059;
    placements[s][1][2] = new Array();
    placements[s][1][2][0] = 3;
    placements[s][1][2][1] = 0;
}


function setEqualTo01b(s) {
    placementsbody[s] = new Array();
    placementsbody[s][0] = new Array();
    placementsbody[s][0][0]= 240;
    placementsbody[s][0][1]= 154;
    placementsbody[s][0][2]= 0;
    placementsbody[s][0][3] = new Array();
    placementsbody[s][0][4] = new Array();
    placementsbody[s][0][5] = new Array();
    placementsbody[s][1] = new Array();
    placementsbody[s][1][0] = 1;
    placementsbody[s][1][1] = new Array();
    placementsbody[s][1][1][0] = new Array();
    placementsbody[s][1][1][0][0] = new Array();
    placementsbody[s][1][1][0][0][0] = 153.4999999999997;
    placementsbody[s][1][1][0][0][1] = 105.00000000000065;
    placementsbody[s][1][1][0][1] = 99.41453616046291;
    placementsbody[s][1][1][0][2] = 3.6569958034068586;
    placementsbody[s][1][1][1] = new Array();
    placementsbody[s][1][1][1][0] = new Array();
    placementsbody[s][1][1][1][0][0] = 153.5000000000004;
    placementsbody[s][1][1][1][0][1] = 205.00000000000068;
    placementsbody[s][1][1][1][1] = 100.41538726709169;
    placementsbody[s][1][1][1][2] = 2.608858740675771;
    placementsbody[s][1][1][2] = new Array();
    placementsbody[s][1][1][2][0] = new Array();
    placementsbody[s][1][1][2][0][0] = 333.5000000000004;
    placementsbody[s][1][1][2][0][1] = 204.99999999999937;
    placementsbody[s][1][1][2][1] = 106.50469473220423;
    placementsbody[s][1][1][2][2] = 0.4993467216801231;
    placementsbody[s][1][1][3] = new Array();
    placementsbody[s][1][1][3][0] = new Array();
    placementsbody[s][1][1][3][0][0] = 333.49999999999966;
    placementsbody[s][1][1][3][0][1] = 104.99999999999934;
    placementsbody[s][1][1][3][1] = 105.56159339456751;
    placementsbody[s][1][1][3][2] = -0.48271309521962535;
    placementsbody[s][1][2] = new Array();
    placementsbody[s][1][2][0] = 6;
    placementsbody[s][1][2][1] = 0;
    placementsbody[s][2] = new Array();
    placementsbody[s][2][0] = 1;
    placementsbody[s][2][1] = new Array();
    placementsbody[s][2][1][0] = new Array();
    placementsbody[s][2][1][0][0] = new Array();
    placementsbody[s][2][1][0][0][0] = 343.50000000000045;
    placementsbody[s][2][1][0][0][1] = 204.99999999999926;
    placementsbody[s][2][1][0][1] = 115.3830576817932;
    placementsbody[s][2][1][0][2] = 0.45783372101895686;
    placementsbody[s][2][1][1] = new Array();
    placementsbody[s][2][1][1][0] = new Array();
    placementsbody[s][2][1][1][0][0] = 343.5000000000003;
    placementsbody[s][2][1][1][0][1] = 184.9999999999993;
    placementsbody[s][2][1][1][1] = 108.04281558715514;
    placementsbody[s][2][1][1][2] = 0.2910135320955435;
    placementsbody[s][2][1][2] = new Array();
    placementsbody[s][2][1][2][0] = new Array();
    placementsbody[s][2][1][2][0][0] = 143.50000000000026;
    placementsbody[s][2][1][2][0][1] = 185.00000000000077;
    placementsbody[s][2][1][2][1] = 101.35704218257356;
    placementsbody[s][2][1][2][2] = 2.830762101932688;
    placementsbody[s][2][1][3] = new Array();
    placementsbody[s][2][1][3][0] = new Array();
    placementsbody[s][2][1][3][0][0] = 143.5000000000004;
    placementsbody[s][2][1][3][0][1] = 205.00000000000077;
    placementsbody[s][2][1][3][1] = 109.14783552595077;
    placementsbody[s][2][1][3][2] = 2.6554078774797673;
    placementsbody[s][2][2] = new Array();
    placementsbody[s][2][2][0] = 2;
    placementsbody[s][2][2][1] = 0;
    placementsbody[s][3] = new Array();
    placementsbody[s][3][0] = 1;
    placementsbody[s][3][1] = new Array();
    placementsbody[s][3][1][0] = new Array();
    placementsbody[s][3][1][0][0] = new Array();
    placementsbody[s][3][1][0][0][0] = 143.49999999999966;
    placementsbody[s][3][1][0][0][1] = 105.00000000000077;
    placementsbody[s][3][1][0][1] = 108.22776907984378;
    placementsbody[s][3][1][0][2] = 3.611438530320713;
    placementsbody[s][3][1][1] = new Array();
    placementsbody[s][3][1][1][0] = new Array();
    placementsbody[s][3][1][1][0][0] = 143.49999999999983;
    placementsbody[s][3][1][1][0][1] = 125.0000000000008;
    placementsbody[s][3][1][1][1] = 100.76333658628016;
    placementsbody[s][3][1][1][2] = 3.4335247332029666;
    placementsbody[s][3][1][2] = new Array();
    placementsbody[s][3][1][2][0] = new Array();
    placementsbody[s][3][1][2][0][0] = 343.49999999999983;
    placementsbody[s][3][1][2][0][1] = 124.99999999999929;
    placementsbody[s][3][1][2][1] = 107.48604560592973;
    placementsbody[s][3][1][2][2] = -0.2731878824433378;
    placementsbody[s][3][1][3] = new Array();
    placementsbody[s][3][1][3][0] = new Array();
    placementsbody[s][3][1][3][0][0] = 343.49999999999966;
    placementsbody[s][3][1][3][0][1] = 104.99999999999926;
    placementsbody[s][3][1][3][1] = 114.51309968732836;
    placementsbody[s][3][1][3][2] = -0.4421665386599042;
    placementsbody[s][3][2] = new Array();
    placementsbody[s][3][2][0] = 2;
    placementsbody[s][3][2][1] = 0;
    placementsbody[s][4] = new Array();
    placementsbody[s][4][0] = 1;
    placementsbody[s][4][1] = new Array();
    placementsbody[s][4][1][0] = new Array();
    placementsbody[s][4][1][0][0] = new Array();
    placementsbody[s][4][1][0][0][0] = 214.49999999999994;
    placementsbody[s][4][1][0][0][1] = 141.00000000000023;
    placementsbody[s][4][1][0][1] = 28.62254356272337;
    placementsbody[s][4][1][0][2] = 3.6130526036506922;
    placementsbody[s][4][1][1] = new Array();
    placementsbody[s][4][1][1][0] = new Array();
    placementsbody[s][4][1][1][0][0] = 213.5000000000001;
    placementsbody[s][4][1][1][0][1] = 165.00000000000023;
    placementsbody[s][4][1][1][1] = 28.692333470807128;
    placementsbody[s][4][1][1][2] = 2.7481420156608487;
    placementsbody[s][4][1][2] = new Array();
    placementsbody[s][4][1][2][0] = new Array();
    placementsbody[s][4][1][2][0][0] = 263.50000000000017;
    placementsbody[s][4][1][2][0][1] = 174.9999999999999;
    placementsbody[s][4][1][2][1] = 31.515869018638902;
    placementsbody[s][4][1][2][2] = 0.7292773806962656;
    placementsbody[s][4][1][3] = new Array();
    placementsbody[s][4][1][3][0] = new Array();
    placementsbody[s][4][1][3][0][0] = 263.4999999999999;
    placementsbody[s][4][1][3][0][1] = 134.9999999999999;
    placementsbody[s][4][1][3][1] = 30.220026472523134;
    placementsbody[s][4][1][3][2] = -0.679908854872363;
    placementsbody[s][4][2] = new Array();
    placementsbody[s][4][2][0] = 5;
    placementsbody[s][4][2][1] = 1;
}

// Dan Fox Stack Overflow
function intersects(a,b,c,d,p,q,r,s) {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det == 0) {
        return false;
    } else {
        lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
        gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
        return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
}

var playerTanks = new Array(5);

var botTanks = new Array(5);
var advance = -15;
var bodyMovement = 3;
var selected = 0;
var canvas = document.getElementById("canvas01");
var ctx = canvas.getContext("2d");
ctx.height = canvas.height;
ctx.width = canvas.width;

var prop = 1;
var palette = new Array();


palette[1] = "#E8E0DD"; // 1-
palette[2] = "#cbd4b3"; // 1
palette[3]= "#3E564C";  // 1
palette[4] = "#71A592"; // 2
palette[5] = "#B9DFC8"; // 2-
palette[6] = "#E2F0F5"; // 2
palette[7] = "#E2F0F5"; // 3
palette[8] = "#E2F0F5";

palette[1] = "#d75d00"; // 1-
palette[2] = "#d7a500"; // 1
palette[3] = "#ffa113";  // 1 +
palette[4] = "#9e1701"; // 2
palette[5] = "#9e0112"; // 2-
palette[6] = "#0b0d19"; // 4

function reConfigure(t) {
    for (var k = 0; k < placements[t][0][4].length; k++)
    {
        placements[t][0][4][k][0][0] = prop * placements[t][0][4][k][1] * Math.cos(placements[t][0][4][k][2] + placements[t][0][2]) + placements[t][0][0];
        placements[t][0][4][k][0][1] = prop * placements[t][0][4][k][1] * Math.sin(placements[t][0][4][k][2] + placements[t][0][2]) + placements[t][0][1];

    }


    for(var i = 1; i < placements[t].length; i++) {
        if(placements[t][i][0] == 0) {
            placements[t][i][1] = prop * placements[t][i][5][0] * Math.cos(placements[t][i][5][1] + placements[t][0][2]) + placements[t][0][0];
            placements[t][i][2] = prop * placements[t][i][5][0] * Math.sin(placements[t][i][5][1] + placements[t][0][2]) + placements[t][0][1];

        }

        if(placements[t][i][0] == 1) {
            for (var k = 0; k < placements[t][i][1].length; k++)
            {
                placements[t][i][1][k][0][0] =
                    prop * placements[t][i][1][k][1] *
                    Math.cos(placements[t][i][1][k][2]
                    + placements[t][0][2]) + placements[t][0][0];
                placements[t][i][1][k][0][1] = prop * placements[t][i][1][k][1] * Math.sin(placements[t][i][1][k][2] + placements[t][0][2]) + placements[t][0][1];

            }
        }

    }


    for(var k = 1; k < placements[t].length; k++) {
        if (placements[t][k][0] == 0)
            for(var j = 0; j < placements[t][k][4]; j++) {
                ctx.lineWidth = prop * 4;
                ctx.beginPath();
                ctx.moveTo(placements[t][k][1], placements[t][k][2]);
                ctx.lineWidth =  placements[t][k][3][j][1];
                ctx.strokeStyle = palette[placements[t][k][3][j][2]];
                ctx.lineTo(placements[t][ placements[t][k][3][j][0] ][1],placements[t][ placements[t][k][3][j][0] ][2]);
                ctx.stroke();
            }
        else if (placements[t][k][0] == 1) {
            ctx.fillStyle = palette[placements[t][k][2][0]];
            if(placements[t][k][2][1] == 1) {
                ctx.globalAlpha = .75;
            }

            ctx.beginPath();
            ctx.moveTo(placements[t][k][1][0][0][0], placements[t][k][1][0][0][1]);
            for (var i = 1; i < placements[t][k][1].length; i++) {
                ctx.lineTo(placements[t][k][1][i][0][0], placements[t][k][1][i][0][1]);
            }
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
        }

    }
}
function reConfigureb(t) {
    for(var i = 1; i < placementsbody[t].length; i++) {
        if(placementsbody[t][i][0] == 0) {
            placementsbody[t][i][1] = prop * placementsbody[t][i][5][0] * Math.cos(placementsbody[t][i][5][1] + placementsbody[t][0][2]) + placementsbody[t][0][0];
            placementsbody[t][i][2] = prop * placementsbody[t][i][5][0] * Math.sin(placementsbody[t][i][5][1] + placementsbody[t][0][2]) + placementsbody[t][0][1];

        }

        if(placementsbody[t][i][0] == 1) {
            for (var k = 0; k < placementsbody[t][i][1].length; k++)
            {
                placementsbody[t][i][1][k][0][0] =
                    prop * placementsbody[t][i][1][k][1] *
                    Math.cos(placementsbody[t][i][1][k][2]
                        + placementsbody[t][0][2]) + placementsbody[t][0][0];
                placementsbody[t][i][1][k][0][1] = prop * placementsbody[t][i][1][k][1] * Math.sin(placementsbody[t][i][1][k][2] + placementsbody[t][0][2]) + placementsbody[t][0][1];

            }
        }

    }


    for(var k = 1; k < placementsbody[t].length; k++) {
        if (placementsbody[t][k][0] == 0)
            for(var j = 0; j < placementsbody[t][k][4]; j++) {
                ctx.lineWidth = prop * 4;
                ctx.beginPath();
                ctx.moveTo(placementsbody[t][k][1], placementsbody[t][k][2]);
                ctx.lineWidth =  placementsbody[t][k][3][j][1];
                ctx.strokeStyle = palette[placementsbody[t][k][3][j][2]];
                ctx.lineTo(placementsbody[t][ placementsbody[t][k][3][j][0] ][1],placementsbody[t][ placementsbody[t][k][3][j][0] ][2]);
                ctx.stroke();
            }
        else if (placementsbody[t][k][0] == 1) {
            ctx.fillStyle = palette[placementsbody[t][k][2][0]];
            if(placementsbody[t][k][2][1] == 1) {
                ctx.globalAlpha = .75;
            }

            ctx.beginPath();
            ctx.moveTo(placementsbody[t][k][1][0][0][0], placementsbody[t][k][1][0][0][1]);
            for (var i = 1; i < placementsbody[t][k][1].length; i++) {
                ctx.lineTo(placementsbody[t][k][1][i][0][0], placementsbody[t][k][1][i][0][1]);
            }
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
        }

    }
}

function initializeTankList() {
    for(var i = 0; i < playerTanks.length;i++)
    {
        playerTanks[i] = new Array(10);
        botTanks[i] = new Array(10);
        initializeTank(i);
    }
}
function initializeTank(s) {
    playerTanks[s][0] = s + 1;
    playerTanks[s][1] = 100;
    playerTanks[s][2] = 100;
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
////////////////////////////////////
var fill = "green";
function draw() {
    ctx.fillStyle = fill;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(testx1, testy1);
    ctx.lineTo(testx2, testy2);
    ctx.stroke();
    for(var i = 0; i < 1; i++) {
        placements[i][0][1] = playerTanks[i][2] + advance * Math.sin(playerTanks[i][3]* (Math.PI / 180));
        placements[i][0][0] = playerTanks[i][1] + advance * Math.cos(playerTanks[i][3] * (Math.PI / 180));
        placements[i][0][2] = (playerTanks[i][3] + playerTanks[i][4] ) * (Math.PI / 180);
        placementsbody[i][0][1] = playerTanks[i][2];
        placementsbody[i][0][0] = playerTanks[i][1];
        placementsbody[i][0][2] = (playerTanks[i][3]) * (Math.PI / 180);
        reConfigureb(i);
        reConfigure(i);
        //document.getElementById("clown").innerHTML = "Checking " + placements[i][0][4][0][0][0] + ", " + placements[i][0][4][0][0][1] + " and " +  placements[i][0][4][1][0][0] + ", " + placements[i][0][4][1][0][1];
        secondTry(i,3);
        ctx.beginPath();
        ctx.arc(placements[i][0][0], placements[i][0][1], 5, 0, 2*Math.PI);
        ctx.stroke();
    }
}

function move(s) {
    if(s.keyCode > 47 && s.keyCode < 60)
        selected = s.keyCode - 48;
    else {
        switch (s.keyCode) {
            case (66): fire(selected); break;
            default : validate(selected, s.keyCode, 3);
        }
        secondTry(selected, 3);
    }

}
var lastMadeMove = 5;
function validate(sel, action, size)
{
    var go = true;
    // make sure placements are up to date
    reConfigure(sel);
    // copy to playertanks and placements temporary location
    playerTanks[100] = playerTanks[sel];
    placements[100] = placements[sel];
    // placements[100] should be equal to placements[sel]
    reConfigure(100);
    switch (action) {
        case(37): playerTanks[100][3] = playerTanks[100][3] - size;
        break;
        case(38):
            playerTanks[100][1] = playerTanks[100][1] + size * Math.cos(playerTanks[100][3]* (Math.PI / 180));
            playerTanks[100][2] = playerTanks[100][2] + size * Math.sin(playerTanks[100][3]* (Math.PI / 180));
            break;
        case (39): playerTanks[100][3] = playerTanks[100][3] + size; break;
        case (40): playerTanks[100][1] = playerTanks[100][1] - size * Math.cos(playerTanks[100][3]* (Math.PI / 180));
            playerTanks[100][2] = playerTanks[100][2] - size * Math.sin(playerTanks[100][3]* (Math.PI / 180));
            break;
        case (65): playerTanks[100][4] = playerTanks[100][4] - size; break;
    }
    lastMadeMove = action;
    for (var j = 0; j < placements[100][0][4].length - 1; j++) {
        if(intersects(testx1, testy1, testx2, testy2,
            placements[100][0][4][j][0][0], placements[100][0][4][j][0][1],
            placements[100][0][4][j+1][0][0],  placements[100][0][4][j+1][0][1])) {
            document.getElementById("clown").innerHTML = "messed up1";
            reConfigure(sel);
            go = false;
        }
    }

    if(intersects(testx1, testy1, testx2, testy2,
            placements[100][0][4][0][0][0], placements[100][0][4][0][0][1],
            placements[100][0][4][ placements[100][0][4].length - 1][0][0],
            placements[100][0][4][ placements[100][0][4].length - 1][0][1])) {
        document.getElementById("clown").innerHTML = "messed up2";
        go = false;
        }
    if (go == true) {
        playerTanks[sel] = playerTanks[100];
        reConfigure(sel);
        document.getElementById("clown").innerHTML = "fine";
    }

    else {
        document.getElementById("clown").innerHTML += " and not changed";
    }
}
function secondTry(sel, size) {
    if (!isFine(sel)) {
        switch (lastMadeMove) {
            case(37): playerTanks[sel][3] = playerTanks[sel][3] + size;
                break;
            case(38):
                playerTanks[sel][1] = playerTanks[100][1] - size * Math.cos(playerTanks[sel][3]* (Math.PI / 180));
                playerTanks[sel][2] = playerTanks[100][2] - size * Math.sin(playerTanks[sel][3]* (Math.PI / 180));
                break;
            case (39): playerTanks[sel][3] = playerTanks[sel][3] - size; break;
            case (40): playerTanks[sel][1] = playerTanks[sel][1] + size * Math.cos(playerTanks[sel][3]* (Math.PI / 180));
                playerTanks[sel][2] = playerTanks[sel][2] + size * Math.sin(playerTanks[sel][3]* (Math.PI / 180));
                break;
            case (65): playerTanks[sel][4] = playerTanks[sel][4] + size; break;
        }
    }
}
function isFine(i) {
    for (var j = 0; j < placements[i][0][4].length - 1; j++) {
        if(intersects(testx1, testy1, testx2, testy2,
                placements[i][0][4][j][0][0], placements[i][0][4][j][0][1],
                placements[i][0][4][j+1][0][0],  placements[i][0][4][j+1][0][1]) == true) {
            return false;
            break;
        }
    }

    if(intersects(testx1, testy1, testx2, testy2, placements[i][0][4][0][0][0], placements[i][0][4][0][0][1],  placements[i][0][4][ placements[i][0][4].length - 1][0][0],  placements[i][0][4][ placements[i][0][4].length - 1][0][1]) == true) {
        return false;
    }
    return true;
}


function start() {
    placements[0] = new Array();
    placementsbody[0] = new Array();
    setEqualTo01(0);
    setEqualTo01b(0);
    placements[100] = new Array();
    ctx.height = canvas.height;
    ctx.width = canvas.width;
    window.addEventListener("keydown", move, false);
    //window.addEventListener("keyup", move2, false);
    setInterval(draw, 10);

}

window.addEventListener("load", start, false);