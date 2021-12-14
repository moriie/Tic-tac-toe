
let finished = false;
let player_one = {name: "", score: 0, team: ""};
let player_two = {name: "", score: 0, team: ""};
let turn = true;
let board = [
    `<button id="1" class="game-button 0 1 2"></button>`, 
    `<button id="2" class="game-button 1 3"></button>`, 
    `<button id="3" class="game-button 1 4 7"></button>`, 
    `<button id="4" class="game-button 2 5"></button>`, 
    `<button id="5" class="game-button 0 3 5 7"></button>`, 
    `<button id="6" class="game-button 4 5"></button>`, 
    `<button id="7" class="game-button 2 6 7"></button>`, 
    `<button id="8" class="game-button 3 6"></button>`, 
    `<button id="9" class="game-button 0 4 6"></button>`
];
let winArray = [0, 0, 0, 0, 0, 0, 0, 0]

document.addEventListener("submit", startGame);

function startGame(e){
    e.preventDefault();

    document.querySelector(".welcome").className = "hidden"

    player_one.name = document.getElementById("p1-name").value;
    player_one.team = "X"
    player_two.name = document.getElementById("p2-name").value;
    player_two.team = "O"

    board.forEach((item)=>{
        document.querySelector(".game-container").innerHTML += item;
    })

    document.querySelectorAll('.game-button').forEach((button)=>{
        button.addEventListener("click", turnResolution)
    })
}   

const turnResolution = (e) => {
    let point;

    if (turn){
        e.target.innerHTML = "X"
        point = 1
    }
    else {
        e.target.innerHTML = "O"
        point = -1
    }

    if (e.target.id === "1" || e.target.id === "5" || e.target.id === "9"){
        winArray[0] = winArray[0]+point;
    }
    if (e.target.id === "1" || e.target.id === "2" || e.target.id === "3"){
        winArray[1] = winArray[1]+point;
    }
    if (e.target.id === "1" || e.target.id === "4" || e.target.id === "7"){
        winArray[2] = winArray[2]+point;
    }
    if (e.target.id === "2" || e.target.id === "5" || e.target.id === "8"){
        winArray[3] = winArray[3]+point;
    }
    if (e.target.id === "3" || e.target.id === "6" || e.target.id === "9"){
        winArray[4] = winArray[4]+point;
    }
    if (e.target.id === "4" || e.target.id === "5" || e.target.id === "6") {
        winArray[5] = winArray[5]+point;
    }
    if (e.target.id === "7" || e.target.id === "8" || e.target.id === "9"){
        winArray[6] = winArray[6]+point;
    }
    if (e.target.id === "3" || e.target.id === "5" || e.target.id === "7"){
        winArray[7] = winArray[7]+point;
    }

    checkWinner()

    turn = !turn;
}

const checkWinner = () => {
    winArray.forEach((score, index)=>{
            if (score === 3 || score === -3){
                finished = true;
                if (turn){
                    if (player_one.team === "X"){
                        winner = player_one;
                        player_one.score++
                        document.querySelector(".game-container").innerHTML += `<p>The winner is ${player_one.name}!</p>`;
                    }
                    else {
                        winner = player_two;
                        player_two.score++
                        document.querySelector(".game-container").innerHTML += `<p>The winner is ${player_two.name}!</p>`;
                    }
                }
                else {
                    if (player_one.team === "O"){
                        winner = player_one;
                        player_one.score++
                        document.querySelector(".game-container").innerHTML += `<p>The winner is ${player_one.name}!</p>`;
                    }
                    else {
                        winner = player_two;
                        player_two.score++
                        document.querySelector(".game-container").innerHTML += `<p>The winner is ${player_two.name}!</p>`;
                    }
                }
                gameFinish(index)
            }
        })
}

const gameFinish = (index) => {
    winningElements = document.getElementsByClassName(`${index}`)
    for (let n = 0; n < winningElements.length; n++){
        winningElements[n].style.color = "red";
    }
    // document.body.innerHTML += `<button id="restart">Restart</button>`
    // document.querySelector("#restart").addEventListener("click", nextRound)
}

// const nextRound = () =>{
//     document.querySelector(".game-container").innerHTML = ``
//     board.forEach((item)=>{
//         document.querySelector(".game-container").innerHTML += item;
//     })
//     winArray = [0, 0, 0, 0, 0, 0, 0, 0]
// }



    