let sc1 = document.getElementById("score1")



function incr(buttonId, incrementValue) {
  let currentScore = parseInt(document.getElementById(buttonId).textContent);
  currentScore += incrementValue;
  document.getElementById(buttonId).textContent = currentScore;
}

function rst() {
  const score1Element = document.getElementById("score1");
  const score2Element = document.getElementById("score2");

  score1Element.textContent = 0;
  score2Element.textContent = 0;
}