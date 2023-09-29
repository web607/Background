var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value + ")";

    css.textContent = body.style.background + ";"; 
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// we can also add to HTML to input :
// <input oninput="setGradient()" which is bacically calling above function 
// and we can remove to 2 last sentences in Jvascript, where  we added Event Listener
// what is the diffence? the diffence is that here we are adding 
// Javacript to HTML = SEPARATION OF CONCERNS and also we can only add "setGradient", 
// but in Javacript we can add in the function more things. It is a lot more extensible.
// 
