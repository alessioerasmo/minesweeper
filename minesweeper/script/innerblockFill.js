/*
 * richiamo questa funzione quando voglio piazzare le mine, la funzione chiama in 
 * automatico tutte le funzioni necessarie alla generazione dei numeri
 */
function spawnmine(mines, grid) {
    mines = parseInt(mines, 10);
    var spawnedmines = 0;
    while (spawnedmines < mines) {
        var mineRow = Math.floor(Math.random() * numberOfrows);
        var mineColumn = Math.floor(Math.random() * numberOfrows);
        if (grid[mineRow][mineColumn].getValue() !== 0) {
            //setto il nodo specifico come mina
            grid[mineRow][mineColumn].setValue(0);
            spawnedmines++;
            mineswarning(mineRow, mineColumn, grid);
            /*
            var mine = block.firstChild;
            mine.style.opacity = 0.1;
            console.log(block.innerHTML);
            mine.onclick = showmine;
        */
        }
    }

}

function mineswarning(mineRow, mineColumn, grid) {
    //console.log("mina" + row + column);


    for (var x = -1; x < 2; x++)
        for (var y = -1; y < 2; y++) {
            if (mineRow + x < grid.length && mineRow + x >= 0)
                if (mineColumn + y < grid[0].length && mineColumn + y >= 0) {
                    var node = grid[mineRow + x][mineColumn + y];
                    if (node.getValue() == null) node.setValue(1);
                    else if (node.getValue() == 0) node.setValue(0);
                    else {
                        node.setValue(node.getValue() + 1);
                    }


                }
        }

}

/*
 * questa funzione ha il compito di ripulire tutto il campo
 */
function cleanfield(row, column, numberOfrows) {

}

/*
 * Questa funzione ha il compito di mostrare il contenuto di una 
 * casella una volta cliccatocisi sopra
 */

function showmine() {

}