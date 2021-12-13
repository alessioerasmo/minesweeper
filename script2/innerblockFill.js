
/*
 * funzione richiamata per riempire un campo con un oggetto, che sia mina, numero 
 * o altro non cambia, in caso di codice html formattarlo correttamente come stringa 
 * e passarlo al parametro object
 */
function innerfill(row, column, object) {
    var element = document.getElementById("box" + row + "e" + column);
    
    var numbercolors = ["black", "blue", "green", "orange", "red"];

    if (object == "1")
    if (element.textContent != "")
        {
            var number = parseInt(element.textContent, 10);
            number+= 1;
            object = number;
            element.style.color = numbercolors[number-1];     
        }
            
       

    /*
     * se l'oggetto da posizionare è una mina posiziona l'immagine 
     */    
    if (object == "mine"){
        object = "<img id ='mine' src='images/mine.svg'>";
    }



    element.innerHTML = object;
   
}

/*
 * richiamo questa funzione quando voglio piazzare le mine, la funzione chiama in 
 * automatico tutte le funzioni necessarie alla generazione dei numeri
 */
function spawnmine(mines, numberOfrows) {

    mines = parseInt(mines, 10);
    numberOfrows = parseInt(numberOfrows, 10);

    var spawnedmines = 0;
    while ( spawnedmines < mines ) {
        var random1 = Math.floor(1 + Math.random() * numberOfrows);
        var random2 = Math.floor(1 + Math.random() * numberOfrows);
        var block = document.getElementById("box" + random1 + "e" + random2);
        if (block.innerHTML !== '<img id="mine" src="images/mine.svg">') {
            mineswarning(random1, random2);
            innerfill(random1, random2, "mine");
            spawnedmines++;
            /*
            var mine = block.firstChild;
            mine.style.opacity = 0.1;
            console.log(block.innerHTML);
            mine.onclick = showmine;
        */
        }
    }
    //console.log(spawnedmines);
}

function mineswarning(row, column) {
    //console.log("mina" + row + column);

    
    for (var x =-1 ; x<2; x++ )
        for (var y=-1; y<2; y++){
            var box = document.getElementById("box" + (row+x) + "e" + (column+y))
            if ( box != null && box.innerHTML != '<img id="mine" src="images/mine.svg">' )
                innerfill((row+x), (column+y), "1");
        }
     
}

function changeboxvalue(row, column) {
    var tofill = document.getElementById("box" + random1 + random2);

}

/*
 * questa funzione ha il compito di ripulire tutto il campo
 */
function cleanfield(row, column, numberOfrows) {
    for (var i = 0; i < numberOfrows; i++) {
        for (var j = 0; j < numberOfrows; j++) {
            innerfill(i, j, "");
        }
    }
}

/*
 * Questa funzione ha il compito di mostrare il contenuto di una 
 * casella una volta cliccatocisi sopra
 */

function showmine(){

    console.log("sono dentro");
    this.style.opacity = 1;

}
