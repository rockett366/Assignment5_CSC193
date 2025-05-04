//Emily Mejia

//will increase the size of the text
function bigger() {
  alert("Text will now be bigger!");
  document.getElementById("txt").style.fontSize = "24px";
}

//will change the text font
function fancyChange() {
  const fancy = document.getElementById("fancy");
  const txt = document.getElementById("txt");

  if (fancy.checked) {
    alert("Text will now be Fancy!");
    txt.style.fontWeight = "bold";
    txt.style.color = "blue";
    txt.style.textDecoration = "underline";
  } else {
    alert("Text will now be Boring!");
    txt.style.fontWeight = "normal";
    txt.style.color = "black";
    txt.style.textDecoration = "none";
  }
}
// will add a Moo at the end of the text
function moo() {
  document.getElementById("txt").value = document
    .getElementById("txt")
    .value.toUpperCase();

  var oldVal = document.getElementById("txt").value;
  var parts = oldVal.split(" ");
  document.getElementById("txt").value = parts.join(" ") + " -Moo";
}
