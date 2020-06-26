var questions = [
  {
    question: "Who inspired the Statut of Liberty?",
    option1: "La Mariane",
    option2: "Athena the Goddess",
    option3: "A black woman",
    option4: "The wife's sculptor",
    answer: "3",
  },
  {
    question: "Who discover that the planet was round",
    option1: "The Dogon",
    option2: "The Maya",
    option3: "The Tibetans",
    option4: "Galilée",
    answer: "1",
  },
  {
    question: "What is the name of the oldest ancestor we found",
    option1: "Lucy",
    option2: "Dinknesh",
    option3: "Eve",
    option4: "Shiva",
    answer: "2",
  }
];

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById("quizzContainer");
var questionElement = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultContainer = document.getElementById("result");

function loadQuestions(questionsIndex) {
  let q = questions[questionsIndex];
  questionElement.textContent = q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

function loadNextQuestion() {
  let selectedOption = document.querySelector('input[type=radio]:checked');
  if (!selectedOption) {
    alert("Please select your answer");
    return;
  }
  let answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 10;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    resultContainer.style.display = "";
    resultContainer.textContent = "Your score : " + score;
    return;
  }
  loadQuestions(currentQuestion);
}
nextButton.onclick = loadNextQuestion;
loadQuestions(currentQuestion);
