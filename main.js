function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }

}

let players = ["456", "001-s2", "001-s1", "067", "199", "230", "196", "junho", "218", "101", "212", "salesman", "017", "222", "333", "380", "124", "soldier11", "149", "240", "388"];
shuffle(players);
players.length = 10;

let x = 0;

let currentPlayer = players[x];

const preview = document.getElementById("preview");

preview.setAttribute("src", `/char/${currentPlayer}.png`);