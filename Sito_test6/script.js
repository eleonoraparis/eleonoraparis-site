// Click sul nome (facoltativo)
const nameClick = document.getElementById("nameClick");
nameClick.addEventListener("click", function() {
  document.getElementById("details").style.display = "block";
});

// About toggle
const aboutClick = document.getElementById("aboutClick");
const cvContent = document.getElementById("cvContent");

aboutClick.addEventListener("click", function() {
  cvContent.style.display = cvContent.style.display === "block" ? "none" : "block";
});
