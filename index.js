// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", ""); //parse pixels as integers
    let left = parseInt(leftNumbers, 10); //convert the parsed pixels to a pixel string

    if (left > 0) { //if you haven't gone off the page
        dodger.style.left = `${left - 1}px`; //changing this # will make it go faster
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") { //if someone presses left arrow keydown
        moveDodgerLeft(); //call this method
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})
        

