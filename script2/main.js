/*
 * qui definisco il numero dei quadrati per linea ed il numero di mine
 */


var numberOfrows = 10;

//var maxmines = numberOfrows*numberOfrows * 0.2;

var numberOfmines = 20;




/*
 * calcolo dimensione e popolo la griglia
 */
var marginScalefactor = 0.06;
refreshgridsize(numberOfrows, marginScalefactor);
populategrid(numberOfrows);

spawnmine(numberOfmines, numberOfrows);


window.addEventListener('resize', function() {
    refreshgridsize(numberOfrows, marginScalefactor);
});