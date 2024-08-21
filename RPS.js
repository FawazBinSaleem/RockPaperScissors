const choices=["👊", "🖐️", "✌️"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tiedScoreDisplay =document.getElementById("tiedScoreDisplay");
let playerScore=0;
let computerScore=0;
let tiedScore=0;
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    }else if (playerChoice === "👊") {
        if (computerChoice === "✌️") {
            result = "YOU WIN";
        } else {
            result = "YOU LOSE";
            
        }
        
    }else if (playerChoice === "🖐️") {
        if (computerChoice === "👊") {
            result = "YOU WIN";
        } else {
            result = "YOU LOSE";
        }
    }else if (playerChoice === "✌️") {
        if (computerChoice === "🖐️") {
            result = "YOU WIN";
        } else {
            result = "YOU LOSE";
        }
    }

    playerDisplay.textContent =  `PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    if(result==="YOU WIN"){
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent=playerScore;
    }else if(result==="YOU LOSE") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent=computerScore;

    }else if(result = "IT'S A TIE"){
        tiedScore++;
        tiedScoreDisplay.textContent=tiedScore;
    }
    
       
}   

if (navigator.vibrate) {
    navigator.vibrate(50); // Vibrate for 50ms
}


// Add event listeners to buttons to provide vibration feedback
document.querySelectorAll('.choices button').forEach(button => {
button.addEventListener('click', () => {
    if (navigator.vibrate) {
        navigator.vibrate(30); // Vibrate for 30ms on button press
    }
});
});

