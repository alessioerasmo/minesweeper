

function refreshgrid(numberOfrows,scalefactor) {

var box = document.getElementById("box");

var boxscale;
if (window.innerWidth > 1500)
    boxscale = 0.4;
else boxscale = 0.7;

var boxwidth = window.innerWidth*boxscale;
//var boxwidth = (box.getBoundingClientRect().width);   box.style.width 


var blocksize = (boxwidth) / (numberOfrows + 2 * numberOfrows * scalefactor);
var blockmargin = blocksize * scalefactor;
console.log(boxwidth);
console.log(blocksize);
console.log(blockmargin);
console.log(numberOfrows * (blocksize + 2 * blockmargin));

document.documentElement.style.setProperty("--innerblock_size", blocksize+"px");
document.documentElement.style.setProperty("--innerblock_margin", blockmargin+"px");
box.style.width = (boxwidth+(2*blockmargin))+"px";


console.log(getComputedStyle(document.documentElement).getPropertyValue('--innerblock_size'));
console.log(getComputedStyle(document.documentElement).getPropertyValue('--innerblock_margin'));


//box.style.width = blockwidth * numberOfrows + 'px';
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
        + "'>" + row + ';' + column + "</p>";
    // per veder se le caselle sono numerate bene" + row + ';' + column + "
}
box.innerHTML = content;
/* ------------------------------------------------------------------------ */

}
