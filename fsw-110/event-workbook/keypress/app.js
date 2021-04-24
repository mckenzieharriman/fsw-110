/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

var input = document.getElementById("output");

window.addEventListener("keydown", press)

function press(event){
    var key = event.keyCode;
    input.innerHTML = "Unicode KEY code: " + key;
}
