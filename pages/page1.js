const buttonids = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9", "btn10"];
const rankids = ["rank1", "rank2", "rank3", "rank4", "rank5", "rank6", "rank7", "rank8", "rank9", "rank10"];

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }

}

let players = ["007", "017", "044", "067", "095", "100", "101", "120", "124", "125", "149", "196", "199", "212", "218", "222", "230", "240", "244", "246", "333", "380", "390", "456", "junho", "manager", "s1-001", "s2-001", "salesman", "soldier-11"];
shuffle(players);
players.length = 10;
players[10] = "playagain";

export default {
    template: `
        <div class="ranks">
            <h1 class="w">Rank Squid Game Players</h1>
            <button class="playagain" id="playagain"><h1>Play Again</h1></button>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p" id="rank1">1.</h1>
                <button class="img-button" id="btn1" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img1">
                </button>
                </div>
            </div>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p" id="rank2">2.</h1>
                <button class="img-button" id="btn2" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img2">
                </button>
                </div>
            </div>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p" id="rank3">3.</h1>
                <button class="img-button" id="btn3" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img3">
                </button>
                </div>
            </div>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p" id="rank4">4.</h1>
                <button class="img-button" id="btn4" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img4">
                </button>
                </div>
            </div>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p" id="rank5">5.</h1>
                <button class="img-button" id="btn5" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img5">
                </button>
                </div>
            </div>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p" id="rank6">6.</h1>
                <button class="img-button" id="btn6" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img6">
                </button>
                </div>
            </div>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p" id="rank7">7.</h1>
                <button class="img-button" id="btn7" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img7">
                </button>
                </div>
            </div>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p" id="rank8">8.</h1>
                <button class="img-button" id="btn8" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img8">
                </button>
                </div>
            </div>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p" id="rank9">9.</h1>
                <button class="img-button" id="btn9" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img9">
                </button>
                </div>
            </div>
            <div class="list">
                <div class="ranked">
                <h1 class="rank-p-10" id="rank10">10.</h1>
                <button class="img-button" id="btn10" onclick="">
                <img src="char/placeholder.png" class="ranked-img" id="img10">
                </button>
                </div>
            </div>
            
            </div>
            <div class="selected">
            <img src="char/placeholder.png" class="selected-img" id="preview">
            </div>
        </div>
    `,
    mounted() {
        for (let i = 0; i < buttonids.length; i++) {
            document.getElementById(buttonids[i]).addEventListener("click", select);
        };
        function reload() {
            location.reload();
        }
        document.getElementById("playagain").addEventListener("click", reload);
        const preview = document.getElementById("preview");
        let x = 0;
        let curImg = `/char/${players[x]}.png`;

        document.getElementById("preview").setAttribute("src", curImg);

        function select(button) {
            console.log(button);
            if (button.target.id == "btn1" || button.target.id == "img1") {
                console.log("clicked btn 1")
                document.getElementById("img1").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn1").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
            } else if (button.target.id == "btn2" || button.target.id == "img2") {
                console.log("clicked btn 2")
                document.getElementById("img2").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn2").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
            } else if (button.target.id == "btn3" || button.target.id == "img3") {
                console.log("clicked btn 3")
                document.getElementById("img3").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn3").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
            } else if (button.target.id == "btn4" || button.target.id == "img4") {
                console.log("clicked btn 4")
                document.getElementById("img4").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn4").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
            } else if (button.target.id == "btn5" || button.target.id == "img5") {
                console.log("clicked btn 5")
                document.getElementById("img5").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn5").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
            } else if (button.target.id == "btn6" || button.target.id == "img6") {
                console.log("clicked btn 6")
                document.getElementById("img6").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn6").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
            } else if (button.target.id == "btn7" || button.target.id == "img7") {
                console.log("clicked btn 7")
                document.getElementById("img7").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn7").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
            } else if (button.target.id == "btn8" || button.target.id == "img8") {
                console.log("clicked btn 8")
                document.getElementById("img8").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn8").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
            } else if (button.target.id == "btn9" || button.target.id == "img9") {
                console.log("clicked btn 9")
                document.getElementById("img9").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn9").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
            } else if (button.target.id == "btn10" || button.target.id == "img10") {
                console.log("clicked btn 10")
                document.getElementById("img10").setAttribute("src", curImg);
                x++;
                curImg = `/char/${players[x]}.png`;
                document.getElementById("preview").setAttribute("src", curImg);
                document.getElementById("btn10").setAttribute("disabled", "true");
                if (x == 10) {
                    document.getElementById("preview").remove();
            };
        };
        };
    },
}