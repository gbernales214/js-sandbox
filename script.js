let colorSelector = document.getElementById("colorSelector");
document.getElementById("colorSelector").onchange = function(){
    console.log(colorSelector.value);
    document.getElementById("colorBox").style = `background-color: ${colorSelector.value}`;
};

function toggleDarkMode(){
    let content = document.getElementById("content");
    content.classList.toggle("dark-mode");

}
function teleport(){
    let runaway = document.getElementById("runaway");
    runaway.innerText = "it changed";
}