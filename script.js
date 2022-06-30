/* Guess Puzzle Game. Version: v1.3.0 */
var startGame = document.querySelector("#start_game");
var endGame = document.querySelector("#end_game");
var guessNum = 0;
var inputFields = document.querySelector(".input");
const checkBtn = document.querySelector("#check");
const stopBtn = document.querySelector("#end_game");
let start = 0;

startGame.addEventListener('click', ()=>{
    endGame.style.display = "block";
    startGame.style.display = "none";
    guessNum = Math.floor((Math.random() * 10) + 1);
    //console.log(guessNum);
    document.getElementById("game_start").innerHTML = "Guess a Number between 1-10 !";
    inputFields.style.display = "flex";

});

endGame.addEventListener('click', ()=>{
    endGame.style.display = "none";
    startGame.style.display = "block";
    guessNum = 0;
    document.getElementById("game_start").innerHTML = "Welcome to Guess Puzzle Game";
    inputFields.style.display = "none";
});

function add(){
    start++;
    //console.log(start);
}

function reset(){
    start = 0;
    //console.log(start);
}

checkBtn.addEventListener('click', add);
stopBtn.addEventListener('click', reset);

function getValue(){
    var val = parseInt(document.querySelector("#input_num").value);
    //console.log(val);

    if(val > guessNum){
        document.getElementById("game_start").innerHTML = "The number is less then " + val;
        document.querySelector("#input_num").value = "";
    } else if(val < guessNum){
        document.getElementById("game_start").innerHTML = "The number is greater then " + val;
        document.querySelector("#input_num").value = "";
    }  else if(val !== guessNum){
        document.getElementById("game_start").innerHTML = "Enter a Number!";
        document.querySelector("#input_num").value = "";
    } else {
        document.getElementById("game_start").innerHTML = "Yess! " + val + " is correct guess! <br> Your Guess Attempt is: " + start;
        document.querySelector("#input_num").value = "";
        inputFields.style.display = "none";
    }
    
}

