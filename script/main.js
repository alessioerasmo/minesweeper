

/*
 * Salva il contenitore dentro una variabile
 */

/* ------------------------------------------------------------------------ */


/*
 * qui definisco il numero dei quadrati per linea e lo scale factor del margine
 */
var numberOfrows = 10;
var scalefactor = 0.05;
/* ------------------------------------------------------------------------ */
refreshgrid(numberOfrows, scalefactor);
//spawnmine(20, numberOfrows);
window.addEventListener('resize', function(){
    refreshgrid(numberOfrows, scalefactor);
});