$(document).ready(function() {

    var firstNumber = Math.floor((Math.random() * 12) + 1);
    var secondNumber = Math.floor((Math.random() * 12) + 1);
    var thirdNumber = Math.floor((Math.random() * 12) + 1);
    var fourthNumber = Math.floor((Math.random() * 12) + 1);
    var randomNumber = Math.floor((Math.random() * 120) + 19);
    var userNumber = 0;
    var wins = 0;
    var losses = 0;



    function initializeCrystals() {
    firstNumber = Math.floor((Math.random() * 12) + 1);
    secondNumber = Math.floor((Math.random() * 12) + 1);
    thirdNumber = Math.floor((Math.random() * 12) + 1);
    fourthNumber = Math.floor((Math.random() * 12) + 1);
    randomNumber = Math.floor((Math.random() * 120) + 19);
    userNumber = 0;
  }


    var winsText = document.getElementById("wins-text");
    var winningText = document.getElementById("winning-text");
    var lossesText = document.getElementById("losses-text");
    var randomText = document.getElementById("random-text");
    var userNumberText = document.getElementById("user-text");




  function checkStatus(){
        if (userNumber > randomNumber) {
            losses++;
            winningText.textContent = "You Lose";
            lossesText.textContent = "Losses:" + losses;
            initializeCrystals();
        }

        if (userNumber === randomNumber) {
            wins++;
            winningText.textContent = "You Win!";
            winsText.textContent = "Wins:" + wins;
            initializeCrystals();
        }
    }


$('#image1').click(function(){
    userNumber += firstNumber;
    userNumberText.textContent = userNumber;
    checkStatus();
});

$('.image2').click(function(){
    userNumber = (userNumber + secondNumber);
    userNumberText.textContent = userNumber;
    checkStatus();
});

$('.image3').click(function(){
    userNumber += thirdNumber;
    userNumberText.textContent = userNumber;
    checkStatus();
});

$('.image4').click(function(){
    userNumber += fourthNumber;
    userNumberText.textContent = userNumber;
    checkStatus();
});

console.log(userNumber);


winsText.textContent = "Wins:" + wins;
lossesText.textContent = "Losses:" + losses;
randomText.textContent = randomNumber;
userNumberText.textContent = userNumber;


});