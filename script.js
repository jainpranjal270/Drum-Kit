var noofbuttons = document.querySelectorAll(".buttons").length;

for(var i = 0; i < noofbuttons; ++i){
    document.querySelectorAll(".buttons")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch(key) {
        case "a":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "s":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "d":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
            
        case "f":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "g":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "h":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "j":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "A":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "S":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "D":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
            
        case "F":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "G":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "H":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "J":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
    }
}


function buttonAnimation (currentKey) {
    currentKey = currentKey.substring().toLowerCase();
    console.log("." + currentKey + "key");
    var activateButton = document.querySelector("." + currentKey + "key");
    activateButton.classList.add("pressed");
    setTimeout(() => {
        activateButton.classList.remove("pressed");
    }, 100);
}