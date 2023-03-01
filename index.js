// let playGame = confirm("Shall we begin a game of 'Rock, Paper, Scissors'?")
// if (playGame){
//   //play Game 
//   let playerChoice = prompt( "Please enter your desired play");
//   if (playerChoice){
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") { 
       
//       let computerChoice = Math.floor(Math.random() * 3 + 1); 
//       let computer = computerChoice === 1 
//       ? "rock"
//       : computerChoice === 2 
//       ? "paper" 
//       : "scissors";
      
//       let result =
//       playerOne === computer
//       ? "Tie Game!"
//       : playerOne === "rock" && computer === "paper"
//       ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
//       : playerOne === "paper" && computer === "scissors"
//       ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
//       : playerOne === "scissors" && computer === "rock"
//       ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
//       : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne Wins!`
//       alert (result);
//     let playAgain = confirm("Play Again?"); 
//     playAgain ? location.reload() : alert("Okay. Thanks for playing.")
//   } else {
//     alert("You haven't made a desired play.")
//   }
//   } else {
//     alert("You didn't make a play.")
//   }
// } else{
//   alert("No problem. Come back for a Game Later. ")
// }


let playGame = confirm("Shall we begin a game of 'Rock, Paper, Scissors'?")
if (playGame){
    while(playGame){
        const playerChoice = prompt( "Please enter your desired play");
        if (playerChoice || playerChoice === ""){
          const playerOne = playerChoice.trim().toLowerCase();
          if (
            playerOne === "rock" || 
            playerOne === "paper" || 
            playerOne === "scissors"
            ) { 
             
            const computerChoice = Math.floor(Math.random() * 3); 
            const rspArray = ["rock", "paper", "scissors"]
            const computer = rspArray[computerChoice]
            
            
            const result =
            playerOne === computer
            ? "Tie Game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne Wins!`
        alert (result);
        playGame = confirm("Play Again?"); 
          if (!playGame) alert("Okay. Thanks for playing.");
          continue;

        } else {
          alert("You haven't made a desired play.")
          continue;
        }
        } else {
          alert("You didn't make a play.")
          break;
        }
    }
} else{
    alert("No problem. Come back for a Game Later. ")
  }