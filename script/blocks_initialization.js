/*
 * invoco questa funzione quando voglio ridimensionare i blocchi ed il box 
 * per adattarli alla dimensione della finestra del browser
 */
function refreshgridsize(numberOfrows, scalefactor) {
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


    // ----------------------------------------------------------------
}


/*
 * richiamo questa funzione quando voglio popolare il box con il numero di box 
 * che desidero
 */
function populategrid(numberOfrows) {
    /*
     * il ciclo for serve a generare il codice html che verrà poi aggiunto al 
     * box mediante un innerHTML
     */
    var content = "";
    for (var i = 0; i < numberOfrows * numberOfrows; i++) {
        /*identifico il numero della riga mediante l'aritmetica modulare*/
        row = i % numberOfrows + 1;
        /*identifico la seconda linea iterando*/
        column = 1;
        var for_value = i + 1;
        for (var k = 0; k < numberOfrows; k++) {
            for_value -= numberOfrows;
            if (for_value > 0)
                column++;
        }
        content += "<p class='innerbox' id='box" +
            row + column +
            "'></p>";
        //per verificare il giusto numeramento -> " + row + ';' + column + "
    }
    box.innerHTML = content;
    /* ------------------------------------------------------------------------ */

}