var btnColorChanger = document.querySelector("#btn-color-changer");

//var isRed = false;

//Method One 


// function cilckColorFunc(){
//     //if white we click to purple
//     if(isRed){
//         document.body.style.backgroundColor = "white";
//         console.log("clicked 1");
//         isRed = false;
//     }
//     //else purple we click to white
//     else{
//         document.body.style.backgroundColor = "red";
//         console.log("clicked 2");
//         isRed = true;
//     }
// }


//Method Two

// function cilckColorFunc(){
//     //if white we click to purple
//     if(isRed){
//         document.body.style.backgroundColor = "white";
//         console.log("clicked 1");
//     }
//     //else purple we click to white
//     else{
//         document.body.style.backgroundColor = "red";
//         console.log("clicked 2");
//     }
//     isRed = !isRed;
// }


//Method Three

function cilckColorFunc(){
    document.body.classList.toggle("red")
}
btnColorChanger.addEventListener("click",cilckColorFunc);


