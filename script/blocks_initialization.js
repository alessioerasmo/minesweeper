/*
 * Salva il contenitore dentro una variabile
 */
var box = document.getElementById("box");
/* ------------------------------------------------------------------------ */


/*
 * qui definisco il numero dei quadrati per linea
 */
var numberOfrows = 10;
/* ------------------------------------------------------------------------ */


/*
 * cattura da variables.css il valore della larghezza di un blocco e del margine.
 * Tolgo gli ultimi due caratteri, cioè 'px', in modo che resti solo il valore 
 * numerico e poi faccio il parseint(stringa, base numerazione), in modo tale
 * da poter fare le somme. 
 * imposto la larghezza del box in modo tale da far entrare su una linea gli 
 * elementi che mi interessano
 */
var blocksize = getComputedStyle(document.documentElement).getPropertyValue('--innerblock_size');
var blockmargin = getComputedStyle(document.documentElement).getPropertyValue('--innerblock_margin');

blocksize = blocksize.substring(0, blocksize.length - 2);
blockmargin = blockmargin.substring(0, blockmargin.length - 2);

var blocksize = parseInt(blocksize, 10);
var blockwidth = parseInt(blockmargin, 10);
blockwidth = blocksize + 2 * blockwidth;

box.style.width = blockwidth * numberOfrows + 'px';
/* ------------------------------------------------------------------------ */


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
        row + column
        + "'></p>";
        // per veder se le caselle sono numerate bene" + row + ';' + column + "
}
box.innerHTML = content;
/* ------------------------------------------------------------------------ */

spawnmine(20, numberOfrows);
