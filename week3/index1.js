for (var i = 0; i < 10; i++ ) {
    var newh = "Hello World"
    var h1 = document.createElement("h1");
    h1.innerText = newh;  
    h1.style.color = "orange"
    h1.style.font = "Courier New"
    document.body.appendChild(h1)  
}

var names1 = ["steve", "larry", "shirley", "steph", "nate", "rick" , "emily"];
for (var h = 4; h < names1.length; h++) {
    console.log(h,"testing")
    var newh2 = document.createElement("h2");
     newh2.innerText = names1[h];
     document.body.appendChild(newh2)
}