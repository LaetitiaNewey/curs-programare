// var query = document.querySelectorAll(".page-title");
var query = document.getElementById("title");

query.innerHTML += "<p id ='text'>Buna ziua</p>";

console.log(query.innerHTML);

var hello = document.getElementById("text");

hello.style.color = "red";

// query.removeChild(hello);
