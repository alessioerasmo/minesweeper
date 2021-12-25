
/*
 * qui definisco il numero dei quadrati per linea ed il numero di mine
 */
var numberOfrows = 5;
var numberOfmines = 5;

var grid = generateVirtualGrid(numberOfrows);


refreshgridsize(numberOfrows);
spawnmine(numberOfmines, grid);
populategrid(grid);


window.addEventListener('resize', function() {
    refreshgridsize(numberOfrows);
});

