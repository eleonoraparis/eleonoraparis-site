// Elementi
const nameClick = document.getElementById("nameClick");
const aboutClick = document.getElementById("aboutClick");
const cvContent = document.getElementById("cvContent");

// Click sul nome
nameClick.addEventListener("click", function() {
  // mostra i dettagli
  document.getElementById("details").style.display = "block";

  // se il CV è visibile, nascondilo e fai tornare "about"
  if (cvContent.style.display === "block") {
    cvContent.style.display = "none";
    aboutClick.style.display = "block";
  }
});

// Click su "about"
aboutClick.addEventListener("click", function() {
  const isVisible = cvContent.style.display === "block";

  cvContent.style.display = isVisible ? "none" : "block";
  aboutClick.style.display = isVisible ? "block" : "none";
});

