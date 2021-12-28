function show_moreless() {
    var element = document.getElementById("moreless");
    var boxmanagement = document.getElementById("boxmanagement");
    var box = document.getElementById("box");
    if (showbox){
    element.innerHTML = '<img id="moreless_img" src="images/more.svg"/>';
    boxmanagement.style.display = "none";
    console.log(box.style.width); 
    }
    else{ 
    element.innerHTML = '<img id="moreless_img" src="images/less.svg"/>';
    boxmanagement.style.display = "block";
    }
    showbox = !showbox;
}

function customgame(){
    numberOfrows = parseInt(document.getElementById("rows").value, 10);
    numberOfmines = parseInt(document.getElementById("mines").value, 10);

    if(numberOfrows*numberOfrows > numberOfmines)
        if (numberOfrows<50)
            grid = newgame(numberOfrows, numberOfmines);

        console.log("rows: " + numberOfrows.toString() + "\n" + "mines: " + numberOfmines.toString());

        var element = document.getElementById("messagebox");
        element.innerHTML = "<p id='message'>Messaggi partita</p>";

        return grid;
    }