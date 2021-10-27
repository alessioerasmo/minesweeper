function innerfill(row, column, object) {

    var element = document.getElementById("box" + row + column);
    element.innerHTML = object;
}

function spawnmine(mines, max) {

    mines = parseInt(mines, 10);
    max = parseInt(max, 10);

    var spawnedmines = 0;
    for (; spawnedmines < mines;) {
        random1 = Math.floor(1 + Math.random() * 10);
        random2 = Math.floor(1 + Math.random() * 10);
        var block = document.getElementById("box" + random1 + random2);
        if (block.textContent == '') {
            mineswarning(random1, random2);
            block.innerHTML = "mine";
            spawnedmines++;
        }
    }

    console.log(mines + max);

}

function mineswarning(row, column) {
    console.log("mina" + row + column);

}

function changeboxvalue(row, column) {
    var tofill = document.getElementById("box" + random1 + random2);

}

function cleanfield(row, column) {
    for (var i = 0; i < mines; i++) {
        random1 = Math.floor(1 + Math.random() * 10);
        random2 = Math.floor(1 + Math.random() * 10);
        document.getElementById("box" + random1 + random2).textContent = "mine";
    }
}