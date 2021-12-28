/*
 * In questa funzione, richiamata dal codice html generato, modello l'evento del box
 * in funzione del suo contenuto
 */
function boxclickevent(i, j) {

    var element = document.getElementById(grid[i][j].toString());


    if (grid[i][j].isClickable() == true) {

        if (flag) {
            if (!grid[i][j].isFlagged()) {
                grid[i][j].flag();
                element.innerHTML = "<img class='innerboxflag' src='images/flag.svg'></img>";
                element.style.opacity = 1;
            } else {
                grid[i][j].unflag();
                element.innerHTML = "";
                element.style.opacity = 0.5;
            }
        } else if (!flag) {
            if (grid[i][j].getValue() == 0) {
                //Ho beccato una mina
                if (clicked == 0){      //se è il primo click ho un'altra possibilità
                    customgame();
                    boxclickevent(i, j);
                } else {                //se non è il primo click ho perso
                element.innerHTML = '<img id="mine" src="images/mine.svg">';
                element.style.opacity = 1;
                losegame();
                }
            } else if (grid[i][j].getValue() > 0) {
                //se ho beccato un numero lo scrivo
                element.innerHTML = "<img class='innerboxflag' src='images/" + grid[i][j].getValue() + ".svg'>";
                element.style.opacity = 1;
                console.log(grid[i][j].getValue());
                clicked++;
                if (clicked == ((numberOfrows * numberOfrows) - numberOfmines))
                    wingame();
                grid[i][j].setClickable(false);
            } else
            //ho beccato uno spazio bianco, quindi trovo quelli intorno
            voidblocksvisit(i, j);
        }
    }
}

/*
 * funzione richiamata da ogni casella 
 */


function voidblocksvisit(i, j) {
    var stack = new Stack();
    stack.push(i);
    stack.push(j);
    recursivevoidblocksvisit(stack);
}

function recursivevoidblocksvisit(stack) {

    if (stack.getsize() != 0) {
        var j = stack.pop();
        var i = stack.pop();
        for (var x = -1; x < 2; x++)
            for (var y = -1; y < 2; y++) {
                if (i + x < grid.length && i + x >= 0)
                    if (j + y < grid[0].length && j + y >= 0) {
                        var newi = i + x;
                        var newj = j + y;
                        if (grid[newi][newj].getValue() == null) {
                            stack.push(newi);
                            stack.push(newj);
                            grid[newi][newj].setValue(-2);
                            //codice che modella la vista
                            document.getElementById(grid[newi][newj].toString()).style.opacity = 1;
                            clicked++;
                            if (clicked == ((numberOfrows * numberOfrows) - numberOfmines))
                                wingame();
                            grid[newi][newj].setClickable(false);
                        }
                        if (grid[newi][newj].getValue() > 0) {
                            boxclickevent(newi, newj);
                        }
                    }
            }
        recursivevoidblocksvisit(stack);
    }
}

function flagswitch() {

    var flagbutton = document.getElementById("flag");
    if (!flag) {
        console.log("bandierine on");
        flag = true;
        flagbutton.style.backgroundColor = "#999";
    } else {
        console.log("bandierine off");
        flag = false;
        flagbutton.style.backgroundColor = "#ddd";
    }
}



function wingame() {
    for (var a = 0; a < grid.length; a++)
        for (var b = 0; b < grid[a].length; b++)
            grid[a][b].setClickable(false);
    var element = document.getElementById("messagebox");
    element.innerHTML = "<p id='message'> Hai Vinto </p> <p id='messagebutton' class='button' onclick='grid=customgame(numberOfrows, numberOfmines);'> Nuova Partita </p>";
    document.getElementById("message").style.marginBottom = "0.5%";
}

function losegame() {
    for (var a = 0; a < grid.length; a++)
        for (var b = 0; b < grid[a].length; b++){
            grid[a][b].setClickable(false);                                 //rendo le colonne non cliccabili
            if (grid[a][b].getValue() == 0){                                //mostro tutte le mine
                var el = document.getElementById(grid[a][b].toString());
                el.innerHTML = '<img id="mine" src="images/mine.svg">';
                el.style.opacity= 0.5;
            }
        }
    var element = document.getElementById("messagebox");
    element.innerHTML = "<p id='message'> Hai perso la partita </p> <p id='messagebutton' class='button' onclick='grid=customgame(numberOfrows, numberOfmines);'> Nuova Partita </p>";
    document.getElementById("message").style.marginBottom = "0.5%";
    
}