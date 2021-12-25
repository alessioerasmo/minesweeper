/*
 * In questa funzione, richiamata dal codice html generato, modello l'evento del box
 * in funzione del suo contenuto
 */
function boxclickevent(i, j){

   if (grid[i][j].isClickable() == true){
    
    var element = document.getElementById(grid[i][j].toString());
    if (grid[i][j].getValue() == 0){
        //Se Ho beccato una minja
        element.innerHTML = '<img id="mine" src="images/mine.svg">';
        element.style.opacity = 1;
        //disattivo tutte le caselle
        for (var a = 0; a<grid.length; a++)
            for (var b = 0; b<grid[a].length; b++)
                grid[a][b].setClickable(false);
        //comunico la sconfitta, il gioco è finito
        console.log("hai perso!");
    }
    else if (grid[i][j].getValue() > 0){
        //se ho beccato un numero lo scrivo
        element.textContent = grid[i][j].getValue();
        element.style.opacity = 1;
        console.log(grid[i][j].getValue());
        clicked++;
        if (clicked == ((numberOfrows*numberOfrows)- numberOfmines))
            wingame();
            grid[i][j].setClickable(false);
    }
    else 
        //ho beccato uno spazio bianco, quindi trovo quelli intorno
        voidblocksvisit(i, j);
    }
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
                    clicked++;
                    if (clicked == ((numberOfrows*numberOfrows)- numberOfmines))
                        wingame();
                        grid[newi][newj].setClickable(false);       
                }
                if (grid[newi][newj].getValue() > 0){
                    boxclickevent(newi, newj);
                }
            }
        }
   recursivevoidblocksvisit(stack);     
}
}


function wingame() {
    console.log("hai vinto!");
    for (var a = 0; a<grid.length; a++)
    for (var b = 0; b<grid[a].length; b++)
        grid[a][b].setClickable(false);
}