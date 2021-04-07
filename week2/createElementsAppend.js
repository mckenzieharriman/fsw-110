var h1 = document.createElement("h1");
h1.innerText = "Welcome to my JS website";

document.body.append(h1);

var p = document.createElement(p);
p.innerText = "All of this was created in Javascript";

document.body.append(p);
 

var process = ["Build HTML", "Build JS", "BAM!! web page"];

var cList = document.getElementById("list")

for ( i = 0; i < process.length; i++) {
    cList.innerHTML += '<li>' + process[i] +'</li>';
    
};

document.body.append(ol);

  



