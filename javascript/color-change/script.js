var inputText = document.querySelector("#input-text");
var redColor = document.querySelector("#red-color");
var blueColor = document.querySelector("#blue-color");
var greenColor = document.querySelector("#green-color");
var outputPara = document.querySelector("#output-para");


function redColorFunc(){
    outputPara.innerHTML = inputText.value;
    outputPara.style.color = "red";
}
function blueColorFunc(){
    outputPara.innerHTML = inputText.value;
    outputPara.style.color = "blue";
}
function greenColorFunc(){
    outputPara.innerHTML = inputText.value;
    outputPara.style.color = "green";
}

redColor.addEventListener("click",redColorFunc)
blueColor.addEventListener("click",blueColorFunc)
greenColor.addEventListener("click",greenColorFunc)