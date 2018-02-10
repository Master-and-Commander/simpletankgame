var x = new Array();
var lineList = new Array();
var increment = 0;
var numberOfCircles = 0;
var currentCircleCount = 0;
var currentCircle;
var beginner;
var counter = 0;

function nextStep()
{
    var lefty = 400;
    var righty = 0;
    var j = 0;
    var k = 0;
    for (i=0; i < numberOfCircles; i++)
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

    var c = document.getElementById("circle");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    lineList[increment] = new Array(4);
    lineList[increment][0] = xone;
    lineList[increment][1] = yone;
    lineList[increment][2] = xtwo;
    lineList[increment][3] = ytwo;
    increment += 1;
    ctx.moveTo(xone, yone);
    ctx.lineTo(xtwo, ytwo);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#22283B";
    ctx.stroke();



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
        ctx.moveTo(xone, yone);
        ctx.lineTo(x[specialI][0], x[specialI][1]);
        ctx.stroke();

        ctx.beginPath();
        lineList[increment] = new Array(4);
        lineList[increment][0] = xtwo;
        lineList[increment][1] = ytwo;
        lineList[increment][2] = x[specialI][0];
        lineList[increment][3] = x[specialI][1];
        increment += 1;
        ctx.moveTo(xtwo, ytwo);
        ctx.lineTo(x[specialI][0], x[specialI][1]);
        ctx.stroke();
        topflavor(j, specialI);
        topflavor(specialI, k);
    }
    // bottom
    if (v != 0) {
        ctx.beginPath();
        lineList[increment] = new Array(4);
        lineList[increment][0] = xone;
        lineList[increment][1] = yone;
        lineList[increment][2] = x[specialy][0];
        lineList[increment][3] = x[specialy][1];
        increment += 1;
        ctx.moveTo(xone, yone);
        ctx.lineTo(x[specialy][0], x[specialy][1]);
        ctx.stroke();

        ctx.beginPath();
        lineList[increment] = new Array(4);
        lineList[increment][0] = xtwo;
        lineList[increment][1] = ytwo;
        lineList[increment][2] = x[specialy][0];
        lineList[increment][3] = x[specialy][1];
        increment += 1;
        ctx.moveTo(xtwo, ytwo);
        ctx.lineTo(x[specialy][0], x[specialy][1]);
        ctx.stroke();
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
    var c = document.getElementById("circle");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    lineList[increment] = new Array(4);
    lineList[increment][0] = x[originone][0];
    lineList[increment][1] = x[originone][1];
    lineList[increment][2] = x[target][0];
    lineList[increment][3] = x[target][1];
    increment += 1;
    ctx.moveTo(x[originone][0], x[originone][1]);
    ctx.lineTo(x[target][0], x[target][1]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#22283B";
    ctx.stroke();

    ctx.beginPath();
    lineList[increment] = new Array(4);
    lineList[increment][0] = x[origintwo][0];
    lineList[increment][1] = x[origintwo][1];
    lineList[increment][2] = x[target][0];
    lineList[increment][3] = x[target][1];
    increment += 1;
    ctx.moveTo(x[origintwo][0], x[origintwo][1]);
    ctx.lineTo(x[target][0], x[target][1]);
    ctx.stroke();
}

function placeADot(event)
{

    if(event.pageY < 600 && event.pageX < 500)
    {
        x[counter] = new Array(2);
        x[counter][0] = event.pageX;
        x[counter][1] = event.pageY;
        var c = document.getElementById("circle");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x[counter][0], x[counter][1], 1, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        counter += 1;
        numberOfCircles += 1;
    }
}



window.addEventListener("click", placeADot, false);