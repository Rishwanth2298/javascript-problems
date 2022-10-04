var inputNumber = document.querySelector("#input-number");
var inputNumberResetButton = document.querySelector("#input-number-button");
var outputA = document.querySelector("#output-a");
var outputB = document.querySelector("#output-b");
var outputC = document.querySelector("#output-c");
var pointBtnA = document.querySelector("#point-a");
var pointBtnB = document.querySelector("#point-b");

var gameOver = false;
var winningScore = 5;

countA = 0;
countB = 0;
pointBtnA.addEventListener("click",function(){
    if(!gameOver){
        countA += 1;
        if(countA === winningScore){
            //gameOver = true; use this or this gameOver = !gameOver;
            gameOver = !gameOver;
            console.log(countA);
            console.log(gameOver);
        }
        outputA.innerHTML = countA;
    }
   
})

pointBtnB.addEventListener("click",function(){
    if(!gameOver){
        countB += 1;
        if(countB === winningScore){
            gameOver = true;
            console.log(countB);
            console.log(gameOver);
        }
        outputB.innerHTML = countB;
    }
})

inputNumberResetButton.addEventListener("click",resetFunc)

function resetFunc(){
    countA = 0;
    countB = 0;
    outputA.innerHTML = 0;
    outputB.innerHTML = 0;
    gameOver = false;
}

inputNumber.addEventListener("change",function(){
    outputC.innerHTML = "Winning Score : " + inputNumber.value;
    winningScore = Number(inputNumber.value);
    resetFunc()
})