//project 2

var attributeChangeInput = document.querySelector("#inputText");
var outputPara = document.querySelector("#outputPara");
var h1Element = document.querySelector("#h1-element");
var h2Element = document.querySelector("#h2-element");
var h3Element = document.querySelector("#h3-element");
var newButton = document.querySelector("#newButton")

function changeAttr(){
    outputPara.innerText = attributeChangeInput.value;
}
newButton.addEventListener("click",changeAttr);


function elementH1(){
    valueOfH1 = "<h1>" + attributeChangeInput.value + "</h1>";
    outputPara.innerHTML = valueOfH1;
}

h1Element.addEventListener("click",elementH1);

function elementH2(){
    valueOfH2 = "<h2>" + attributeChangeInput.value + "</h2>";
    outputPara.innerHTML = valueOfH2;
}

h2Element.addEventListener("click",elementH2);

function elementH3(){
    valueOfH3 = "<h3>" + attributeChangeInput.value + "</h3>";
    outputPara.innerHTML = valueOfH3;
}

h3Element.addEventListener("click",elementH3);




