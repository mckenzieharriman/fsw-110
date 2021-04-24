function coordi(movement) {var x = movement.clientX;
var y = movement.clientY;
var position = "X coords: " + x + "Y coords: " + y;
box.innerHTML = position;
}
var box = document.querySelector(".red-box")
box.addEventListener("mousemove", coordi)