/*
 * Classe che rappresenta virtualmente una singola casella
 */
class Node {

    constructor(identifier) {
        this.isCovered = false;
        this.identifier = identifier;
    }

    setValue(value) {
        this.value = value;
        /*
         * il valore può essere: 
         * -1       -> vuoto
         * 0        -> mina
         * 1..8     -> warning mine
         */
    }
    getValue() {
        return this.value;
    }

    setCovered(isCovered) {
        this.isCovered = isCovered;
    }

    isCovered() { return this.isCovered; }

    toString() {
        return this.identifier;
    }
}


/*
 * qui definisco il numero dei quadrati per linea ed il numero di mine
 */
var numberOfrows = 10;
var numberOfmines = 8;

var grid = generateVirtualGrid(numberOfrows);


refreshgridsize(numberOfrows);
spawnmine(numberOfmines, grid);
populategrid(grid);


window.addEventListener('resize', function() {
    refreshgridsize(numberOfrows);
});


/*
 * calcolo dimensione e popolo la griglia
 */

/*





*/