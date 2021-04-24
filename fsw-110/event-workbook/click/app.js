// make the box disapear when the user clicks it
var disapear = document.querySelector(".red-box");

// disapearing box fucntion
function box() {
    disapear.style.display = "block";
}
function hideBox() {
    disapear.style.display = "none";
}

function appear(){
    if(disapear.style.display === "block"){
        hideBox()
    } else{
        box()
    }
}

disapear.addEventListener("click" , appear)