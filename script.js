const divContainer = document.getElementById("divContainer");
let arrayDiv = new Array();
let arraySize = 16;
const arraySlider = document.getElementById("slider");
const arrayButton = document.getElementById("arrayButton");
const sliderValue = document.querySelector(".sliderValue");
let totalSize = 320;
let boxSize = 16;
const colorPicker = document.querySelector(".colorPicker");
let randomColor = document.querySelector(".randomColor");
let color = colorPicker.value;
const gridButton = document.querySelector(".removeGrid");
let toggle = false


function changeArraySize(size) {
    arrayDiv.forEach(element => {
        //clears the original DOM of divs
        element.remove();
    });

    boxSize = (320 / (size)) - 1;
    for(let i = 0; i < size*size; i++) {
        //creates an array of divs and appends it to DOM
        arrayDiv[i] = document.createElement('div');
        arrayDiv[i].className = 'block';
        arrayDiv[i].style.height = boxSize + "px";
        arrayDiv[i].style.width = boxSize + "px";
        divContainer.appendChild(arrayDiv[i]);
    }
    arrayDiv.forEach(element => {
        element.addEventListener("mousedown", function() {
            checkRandom();
            element.style.backgroundColor = color;
        })
        element.addEventListener("mouseover", mouseheld);
    });
}

changeArraySize(16);

function checkRandom() {
    if(randomColor.checked) {
        //Random color algorithm using Hexadecimal=
        color = "#" + Math.floor(Math.random()*16777215).toString(16);
    } else {
        color = colorPicker.value;
    }
}

arrayButton.addEventListener("click", function() {
    changeArraySize(arraySize);
});
arraySlider.addEventListener("input", function() {
    arraySize = arraySlider.value;
    sliderValue.innerHTML = arraySize;
});

function mouseheld(e) {
    //check if mouse if held down in while entering a div...
    if(e.buttons > 0) {
        checkRandom();
        e.target.style.backgroundColor = color;
    }
}

gridButton.addEventListener("click", function() {
    //in order to make the toggle function work I need to initialize a variable keeping track of the state of the grid
    if(!toggle) {
        arrayDiv.forEach(element => {
            element.style.border = "none";
            //add one to boxSize because the removal of the border
            element.style.width = boxSize + 1 + "px";
            element.style.height = boxSize + 1 + "px";
            toggle = true;
        })
    } else {
        arrayDiv.forEach(element => {
            element.style.border = "black 0.5px solid";
            //add one to boxSize because the removal of the border
            element.style.width = boxSize + "px";
            element.style.height = boxSize + "px";
            toggle = false;
        })
    }
    
});