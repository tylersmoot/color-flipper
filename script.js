let body = document.querySelector("body");
const title = document.createElement("h1");
const colors = ["red", "green", "purple", "yellow", "pink", "gold", "orange", "brown", "seagreen", "teal", "royalblue", "darkslategray", "cyan", "magenta", "olive", "salmon" ];



// an h1 title created as a child of the body
title.textContent = "Random Color Flipper";
body.appendChild(title);





const container = document.createElement("div");   //container for the button and current color text 
let currentColor = document.createElement("p");    //p tag created that will contain current color text
let btn = document.createElement("button");        // button created for user to click




btn.textContent = "Change Color";
currentColor.textContent = "blue".toUpperCase();
currentColor.classList.add("currentColor");
btn.classList.add("btn");
container.classList.add("container");




body.appendChild(container);
container.appendChild(btn);
container.appendChild(currentColor);





btn.addEventListener("click", () => {
  
  let color = Math.floor(Math.random() * colors.length);

       let x = colors[color];
         console.log(x);
           body.style.background = x;
             currentColor.textContent = x.toUpperCase();
    
});

