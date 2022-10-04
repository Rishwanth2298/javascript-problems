// var colorArray = [
//     "rgb(255, 0, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(255, 0, 255)"
// ];

var colorArray = generateRandomColors(6);

var gridColors = document.querySelectorAll(".grid-color");
var pickedColor = pickedColorFunc();
var colorCode = document.querySelector("#color-code");
colorCode.innerHTML = pickedColor; 

for(i=0;i<gridColors.length;i++){
   gridColors[i].style.backgroundColor = colorArray[i];
    console.log(gridColors);
    console.log(colorArray);
    gridColors[i].addEventListener("click",function(){
       var clickedColor = this.style.backgroundColor;
      
       if(clickedColor === pickedColor){
        console.log("correct");
        colorChange(pickedColor);
       }
       else{
        console.log("wrong")
         this.classList.add("hide")
    }
    })
}

function colorChange(color){
    for(i=0;i<gridColors.length;i++){
        gridColors[i].classList.remove("hide")
        gridColors[i].style.backgroundColor = color;
    }
}

function pickedColorFunc(){
    var random = Math.floor(Math.random() * gridColors.length)
    return colorArray[random]
}

function generateRandomColors(num){
var arr = [];
for(i=0;i<num;i++){
   arr.push(colorArrayFunc())
}
return arr;
}

function colorArrayFunc(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  return "rgb("+ r +", " + g +", " + b+")" 
}