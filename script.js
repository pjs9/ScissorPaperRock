// making choices array
let choices = ['scissor','paper','rock'];
// calling function
function playGame(){   
    // Its computers turn
    computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
        case 0:
            computerChoice = 'paper';
            break;
        case 1:
            computerChoice = 'rock';
            break;
        default:
            computerChoice = 'scissor';
            break;
    }
    // Its users turn to choose
    userChoice = prompt('Do you choose scissor, paper or rock?');
    // to check who've won the game
    if(userChoice == computerChoice){
        document.write("It's a Tie. No one is Winner!! <br> Both player choose : "+ userChoice);
    }else if(userChoice == choices[0] && computerChoice == choices[1]){
        document.write("Your choice is : "+userChoice+ "<br>And Computer's choice is : "+computerChoice+ "<br>So, You've won the game.");
    }else if(userChoice == choices[0] && computerChoice == choices[2]){
        document.write("Your choice is : "+userChoice+ "<br>And Computer's choice is : "+computerChoice+ "<br>So, Computer've won the game.");
    }else if(userChoice == choices[1] && computerChoice == choices[0]){
        document.write("Your choice is : "+userChoice+ "<br>And Computer's choice is : "+computerChoice+ "<br>So, Computer've won the game.");
    }else if(userChoice == choices[1] && computerChoice == choices[2]){
        document.write("Your choice is : "+userChoice+ "<br>And Computer's choice is : "+computerChoice+ "<br>So, You've won the game.");
    }else if(userChoice == choices[2] && computerChoice == choices[0]){
        document.write("Your choice is : "+userChoice+ "<br>And Computer's choice is : "+computerChoice+ "<br>So, You've won the game.");
    }else if(userChoice == choices[2] && computerChoice == choices[1]){
        document.write("Your choice is : "+userChoice+ "<br>And Computer's choice is : "+computerChoice+ "<br>So, Computer've won the game.");
    }else{     
        document.write('Players, Please play with rules and please enter the correct inputs.');
    }
}
// to confirm from the user if s/he wants to play or not
if(confirm('Do you want to play the game?')){
    playGame();
}
else{
    document.write("Okay! See you soon. ");
}