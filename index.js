// generates the first dice
function randNum1() {
    randomNumber1 = [1, 2, 3, 4, 5, 6];
    randomNumber2 = randomNumber1[Math.floor(Math.random() * randomNumber1.length)];
    document.getElementsByClassName("img1")[0].src = `images/dice${randomNumber2}.png`;
    return randomNumber2;  // Return this for use in winnerPicker
}

// generates the second dice
function randNum2() {
    randomNumber3 = [1, 2, 3, 4, 5, 6];
    randomNumber4 = randomNumber3[Math.floor(Math.random() * randomNumber3.length)];
    document.getElementsByClassName("img2")[0].src = `images/dice${randomNumber4}.png`;
    return randomNumber4;  // Return this for use in winnerPicker
}

function winnerPicker() { 
    var player1Win = document.getElementsByClassName("player1Win")[0];
    var player2Win = document.getElementsByClassName("player2Win")[0];
    var playerDraw = 1;
    


    if (randomNumber2 > randomNumber4) {
            player1Win.textContent = 'WINNER!'
            player2Win.textContent = 'LOSER!'
            player1Win.style.display = 'block';
            player2Win.style.display = 'block';
        
    } else if (randomNumber4 > randomNumber2) {
       
            player2Win.textContent = 'WINNER!'
            player1Win.textContent = 'LOSER!'
            player2Win.style.display = 'block';
            player1Win.style.display = 'block';
    } else if (randomNumber4 === randomNumber2) {
        if (playerDraw) 
        player1Win.textContent = 'DRAW!';
        player2Win.textContent = 'DRAW!';
        player2Win.style.display = 'block';
        player1Win.style.display = 'block';
    }
}



// Call the function to run the game

