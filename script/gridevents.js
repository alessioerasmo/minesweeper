/*
 * In questa funzione, richiamata dal codice html generato, modello l'evento del box
 * in funzione del suo contenuto
 */
function boxclickevent(i, j){
    if (grid[i][j].getValue() == 0){
        document.getElementById(grid[i][j].toString()).innerHTML = '<img id="mine" src="images/mine.svg">';
        document.getElementById(grid[i][j].toString()).style.opacity = 1;
        console.log("hai perso!");
    }
    else if (grid[i][j].getValue() > 0){
        var specificContent = grid[i][j].getValue();
        document.getElementById(grid[i][j].toString()).textContent = specificContent;
        document.getElementById(grid[i][j].toString()).style.opacity = 1;
        console.log(grid[i][j].getValue());
    }
    else 
        voidblocksvisit(i, j);
    }

/*
 * funzione richiamata da ogni casella 
 */


function voidblocksvisit(i, j){
    var stack = new Stack();
    stack.push(i);
    stack.push(j);
    recursivevoidblocksvisit(stack);
}

function recursivevoidblocksvisit(stack){

    if (stack.getsize() != 0){
    var j = stack.pop();
    var i = stack.pop();
    for (var x = -1; x < 2; x++)
        for (var y = -1; y < 2; y++) {
            if (i + x < grid.length && i + x >= 0)
            if (j + y < grid[0].length && j + y >= 0) {
                var newi = i + x;
                var newj = j + y; 
                if (grid[newi][newj].getValue() == null){
                    stack.push(newi);
                    stack.push(newj);
                    grid[newi][newj].setValue(-2);
                    //codice che modella la vista
                    document.getElementById(grid[newi][newj].toString()).style.opacity = 1;
                    
                }
                if (grid[newi][newj].getValue() > 0){
                    boxclickevent(newi, newj);
                }
            }
        }
   recursivevoidblocksvisit(stack);     
}
}