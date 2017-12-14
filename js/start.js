var sec1 = document.getElementById("sec1");
var sec2 = document.getElementById("sec2");
var targetB = document.getElementById("coffe-shade");
var targetA = document.getElementById("note-shade");

sec1.addEventListener("mouseenter", function() {
  targetB.style.visibility='visible';
  targetB.style.opacity=0.8;
});


targetB.addEventListener("mouseout", function() {
  targetB.style.opacity=0;
  targetB.style.visibility='hidden';
});

sec2.addEventListener("mouseenter", function() {
  targetA.style.visibility='visible';
  targetA.style.opacity=0.8;
});

targetA.addEventListener("mouseout", function() {
  targetA.style.opacity=0;
  targetA.style.visibility='hidden';
});