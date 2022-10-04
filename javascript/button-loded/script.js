var hideButton = document.querySelector("#hide-button");
var outPut = document.querySelector("#output");



function clickHideFunc(){
  
    hideButton.style.display = "none";
    
    console.log("you clicked this btn");
    var span = document.createElement("SPAN");
    var text = document.createTextNode("You Clicked This Button")
    outPut.appendChild(span);
    span.appendChild(text);
  
}


hideButton.addEventListener("click",clickHideFunc);
