var inputName = document.querySelector("#input-name");
var inputUnitTest = document.querySelector("#unit-test-mark");
var inputPreTest = document.querySelector("#pre-test-mark");
var inputFinalTest = document.querySelector("#final-test-mark");


var enterButton = document.querySelector("#enter");
var outputName1 = document.querySelector("#output-name-1");
var unitTestMark1 = document.querySelector("#unit-test-mark-1");
var preTestMark1 = document.querySelector("#pre-test-mark-1");
var finalTestMark1 = document.querySelector("#final-test-mark-1");

// var outputName2 = document.querySelector("#output-name-2");
// var unitTestMark2 = document.querySelector("#unit-test-mark-2");
// var preTestMark2 = document.querySelector("#pre-test-mark-2");
// var finalTestMark2 = document.querySelector("#final-test-mark-2");

// var outputName3 = document.querySelector("#output-name-3");
// var unitTestMark3 = document.querySelector("#unit-test-mark-3");
// var preTestMark3 = document.querySelector("#pre-test-mark-3");
// var finalTestMark3 = document.querySelector("#final-test-mark-3");

// var outputName4 = document.querySelector("#output-name-4");
// var unitTestMark4 = document.querySelector("#unit-test-mark-4");
// var preTestMark4 = document.querySelector("#pre-test-mark-4");
// var finalTestMark4 = document.querySelector("#final-test-mark-4");

// var outputName5 = document.querySelector("#output-name-5");
// var unitTestMark5 = document.querySelector("#unit-test-mark-5");
// var preTestMark5 = document.querySelector("#pre-test-mark-5");
// var finalTestMark5 = document.querySelector("#final-test-mark-5");




var inputArrName = [];
var inputArrUnitTest = [];
var inputArrPreTest = [];
var inputArrFinalTest = [];
var totalMarks = [];
var avgMarks = [];

function submitName(){
    outputName1.innerHTML = inputName.value;
    unitTestMark1.innerHTML = inputUnitTest.value;
    preTestMark1.innerHTML = inputPreTest.value;
    finalTestMark1.innerHTML = inputFinalTest.value;
    }
enterButton.addEventListener("click",submitName);


for (i = 0; i < 5; i++) {
    // var inputName = prompt("what is your name?");
    inputArrName.push(inputName);
    
    // outputName1.innerHTML = inputName;
    // outputName2.innerHTML = inputName;
    // var inputUnitTest = prompt("what is your unit test mark?");
     inputArrUnitTest.push(inputUnitTest);
    // unitTestMark1.innerHTML = inputUnitTest;
    // unitTestMark2.innerHTML = inputUnitTest;
    // var inputPreTest = prompt("what is your pre test mark?");
     inputArrPreTest.push(inputPreTest);
    // preTestMark1.innerHTML = inputPreTest;
    // preTestMark2.innerHTML = inputPreTest;
    // var inputFinalTest = prompt("what is your final test mark?");
     inputArrFinalTest.push(inputFinalTest);
    // finalTestMark1.innerHTML = inputFinalTest;
    // finalTestMark2.innerHTML = inputFinalTest;

   
  
    
    
    
    
    // outputName1.innerHTML = inputName;
    // unitTestMark1.innerHTML = inputUnitTest;
    // preTestMark1.innerHTML = inputPreTest;
    // finalTestMark1.innerHTML = inputFinalTest;

    // outputName2.innerHTML = inputName;
    // unitTestMark2.innerHTML = inputUnitTest;
    // preTestMark2.innerHTML = inputPreTest;
    // finalTestMark2.innerHTML = inputFinalTest;

    // outputName3.innerHTML = inputName;
    // unitTestMark3.innerHTML = inputUnitTest;
    // preTestMark3.innerHTML = inputPreTest;
    // finalTestMark3.innerHTML = inputFinalTest;

    // outputName4.innerHTML = inputName;
    // unitTestMark4.innerHTML = inputUnitTest;
    // preTestMark4.innerHTML = inputPreTest;
    // finalTestMark4.innerHTML = inputFinalTest;

    // outputName5.innerHTML = inputName;
    // unitTestMark5.innerHTML = inputUnitTest;
    // preTestMark5.innerHTML = inputPreTest;
    // finalTestMark5.innerHTML = inputFinalTest;


}


for (i = 0; i < 5; i++) {
  var totalTestMarks = Number(inputArrUnitTest[i]) + Number(inputArrPreTest[i]) + Number(inputArrFinalTest[i]);
  totalMarks.push(totalTestMarks)
  var avgMark = totalTestMarks / 3;
  avgMarks.push(avgMark);
}
var [student1, student2, student3, student4, student5] = totalMarks;
var maxMark = Math.max(student1, student2, student3, student4, student5);

var highMark = totalMarks.indexOf(maxMark);

console.log(inputArrName[highMark] + " got highest mark. Your mark is" + maxMark);
console.log("Your average mark " + avgMarks[highMark]);