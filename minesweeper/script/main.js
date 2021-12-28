/*
 * qui definisco le varibaili globali 
 */
var numberOfrows;      //indica il numero di righe
var numberOfmines;    //indica il numero di mine
var flag = false;           //indica se l'utente ha deciso di selezionare le bandierine  
var clicked = 0;            //conta le griglie cliccate, serve per determinare la win condition
var grid;                   //variabile che conterrà la rappresentazione logica della griglia
var showbox = true;         //indica se il box laterale deve essere mostrato oppure no 
var firstclick = true;

/*
 * eventi shortcut tastiera
 */
window.addEventListener("keypress", function(e){                //selezione flag con F
    if (e.key == 'f' || e.key == 'F') 
        flagswitch();
});

window.addEventListener("keypress", function(e){                //ricomincia partita con R
    if (e.key == 'r' || e.key == 'R') 
        grid = customgame(numberOfrows, numberOfmines);
});

var inputs = document.getElementsByClassName("gameinput");      //input accettano solo numeri
for (var i=0; i<inputs.length; i++){
inputs[i].addEventListener("keypress", function(e){
    var charCode = e.which;
	if (charCode < 48 || charCode > 57) e.preventDefault();
});
};


document.getElementById("rows").value = 10;
document.getElementById("mines").value = 20;
numberOfrows = parseInt(document.getElementById("rows").value, 10);
numberOfmines = parseInt(document.getElementById("mines").value, 10);
grid = customgame(numberOfrows, numberOfmines);


