var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
css.textContent = "linear-gradient(to right, rgb(0, 255, 0) , red(255, 0, 0))";

function bodyStyle(){
    body.style.background = "linear-gradient(to right ," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background;
}
function randomColor(){
    var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var hexColor1 = [];
    var hexColor2 = [];

    for(var i=0; i<6; i++)
    {
    hexColor1.push(hex[Math.floor(Math.random() * hex.length)]);
    hexColor2.push(hex[Math.floor(Math.random() * hex.length)]);
    }
        body.style.background = "linear-gradient(to right ," + '#'+hexColor1.join("") + "," + '#'+hexColor2.join("") + ")";
        color1.value ='#'+hexColor1.join("");
        color2.value = '#'+hexColor2.join("");
        css.textContent = body.style.background;
}

random.addEventListener("click", randomColor);
color1.addEventListener("input", bodyStyle);

color2.addEventListener("input",bodyStyle);

