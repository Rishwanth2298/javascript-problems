var plus = document.querySelector("#plus-btn");
var minus = document.querySelector("#minus-btn");
var outputPara = document.querySelector("#output-para");
var inputText = document.querySelector("#input-text");
var buttonClick = document.querySelector("#check-btn");



function clickFunc(){
    outputPara.innerText = inputText.value;
}

function refreshFunc(){
    var refresh = window.location.reload();
    return refresh;
}

function plusFunc(){ 
 var fontIncrease = window.getComputedStyle(outputPara).fontSize;
  var currentSize = parseFloat(fontIncrease);
  outputPara.style.fontSize = (currentSize + 2) + 'px';
}

function minusFunc(){ 
    var fontIncrease = window.getComputedStyle(outputPara).fontSize;
     var currentSize = parseFloat(fontIncrease);
     outputPara.style.fontSize = (currentSize - 2) + 'px';
   }
plus.addEventListener("click",plusFunc);
minus.addEventListener("click",minusFunc);
inputText.addEventListener("keyup", clickFunc);
buttonClick.addEventListener("click", refreshFunc);





