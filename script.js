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

function setViewportHeight() {
  document.documentElement.style.setProperty(
    '--vh',
    window.innerHeight * 0.01 + 'px'
  );
}

setViewportHeight();
window.addEventListener('resize', setViewportHeight);
