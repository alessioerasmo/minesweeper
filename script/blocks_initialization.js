/*
 * invoco questa funzione quando voglio ridimensionare i blocchi ed il box 
 * per adattarli alla dimensione della finestra del browser
 */
function refreshgridsize(numberOfrows) {

    var scalefactor = 0.06;
    var box = document.getElementById("box");


    //gestione ridimensionamento al variare della risoluzione
    var boxscale;
    if (window.innerWidth > 1500)
        boxscale = 0.35;
    else boxscale = 0.65;
    // ----------------------------------------------------------------

    /*
     * calcolo delle varie dimensioni ed assegnamento, utilizzo la formula
     * latoQuadrato = larghezzaBox/(numberOfrows + 2*numberOfrows(scalefactor))
     * 
     * Dove:
     * 
     * numberOfrows è il numero di elementi per riga/colonna
     * scalefactor è il rapporto tra il margine del quadrato e la sua lunghezza
     */
    var boxwidth = window.innerWidth * boxscale;
    var blocksize = (boxwidth) / (numberOfrows + 2 * numberOfrows * scalefactor);
    var blockmargin = blocksize * scalefactor;
    document.documentElement.style.setProperty("--innerblock_size", blocksize + "px");
    document.documentElement.style.setProperty("--innerblock_margin", blockmargin + "px");

    var calc = (boxwidth + (2 * blockmargin));
    box.style.width = calc + "px";
    box.style.height = calc + "px";

    var boxmanagementsize = (window.innerWidth - calc) > (window.innerWidth * 0.2) ? (window.innerWidth * 0.2) : (window.innerWidth - calc);
    document.getElementById("boxmanagement").style.width = boxmanagementsize + "px";
    document.getElementById("boxmanagement").style.margin = "0px " + (boxmanagementsize * 0.1) + "px";


    // ---------------------------------------------------------------

}


/*
 * questa funzione ha il compito di generare la rappresentazione virtuale della 
 * griglia nella memoria, la griglia che genera contiene solo spazi vuoti
 */
function generateVirtualGrid(numberOfrows) {
    var grid = new Array(numberOfrows);
    for (var i = 0; i < numberOfrows; i++) {
        grid[i] = new Array(numberOfrows);
        for (var j = 0; j < numberOfrows; j++) {
            var identifier = "box" + i + "," + j;
            grid[i][j] = new Node(identifier);
            
        }
    }
    return grid;
}


/*
 * richiamo questa funzione quando voglio generare graficamente la griglia
 */
function populategrid(grid) {

    var content = "";
    for (var i = 0; i < grid.length; i++)
        for (var j = 0; j < grid[i].length; j++) {

            content += "<p class='innerbox' id=" + grid[i][j].toString() + " onclick='boxclickevent(" + i + " ," + j + ")'> </p>";
        }

    document.getElementById("box").innerHTML = content;


    /*
    PER CONTROLLARE CONTENUTO BOX

    if (grid[i][j].getValue() != null)
                var specificContent = grid[i][j].getValue() == 0 ? '<img id="mine" src="images/mine.svg">' : grid[i][j].getValue();
            else
                var specificContent = '';
            content += "<p class='innerbox' id=" + grid[i][j].toString() + " onclick='boxclickevent(" + i + " ," + j + ")'>" + specificContent + "</p>";
        }
    */
}


