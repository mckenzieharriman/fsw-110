// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
function sub(e){
    e.preventDefault()
}
document.getElementById("submit-me").addEventListener("submit",sub); 
