const quizData = [
  {
    question: "What is the process by which plants make their food?",
    answers: [
      { text: "Respiration", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Digestion", correct: false },
      { text: "Fermentation", correct: false },
    ],
  },
  {
    question: "Which particle has a negative charge?",
    answers: [
      { text: "Proton", correct: false },
      { text: "Electron", correct: true },
      { text: "Neutron", correct: false },
      { text: "Photon", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Quartz", correct: false },
    ],
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is the main function of red blood cells?",
    answers: [
      { text: "Fight infections", correct: false },
      { text: "Carry oxygen", correct: true },
      { text: "Clot blood", correct: false },
      { text: "Produce hormones", correct: false },
    ],
  },
  {
    question: "What planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "O2", correct: false },
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
    ],
  },
  {
    question: "What force keeps us grounded on Earth?",
    answers: [
      { text: "Magnetism", correct: false },
      { text: "Friction", correct: false },
      { text: "Gravity", correct: true },
      { text: "Inertia", correct: false },
    ],
  },
  {
    question:
      "What is the term for a machine that can perform tasks autonomously?",
    answers: [
      { text: "Robot", correct: true },
      { text: "Drone", correct: false },
      { text: "AI", correct: false },
      { text: "Cyborg", correct: false },
    ],
  },
];

let currentQuestion = 0;
let score = 0;
const quizContainer = document.getElementById("quiz-container");

function showQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((ans) => {
    const btn = document.createElement("button");
    btn.textContent = ans.text;
    btn.className = "answer-btn";
    btn.addEventListener("click", () => selectAnswer(ans.correct, btn));
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(correct, btn) {
  if (correct) {
    btn.classList.add("correct");
    score += 10;
  } else {
    btn.classList.add("wrong");
    Array.from(btn.parentElement.children).forEach((b) => {
      if (
        quizData[currentQuestion].answers.find(
          (a) => a.text === b.textContent && a.correct
        )
      ) {
        b.classList.add("correct-answer");
      }
    });
  }

  Array.from(btn.parentElement.children).forEach((b) => (b.disabled = true));

  setTimeout(() => {
    currentQuestion++;
    updateProgressBar();
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      quizContainer.innerHTML = `<h2 class="score">Quiz Finished!</h2><p class="score">Your score: ${Math.floor(
        (score / quizData.length) * 10
      )}%</p>
      <div class="d-flex justify-content-center">
        <a href="quiz.html" class="btn btn-primary center-btn restart-quiz">Restart Quiz</a>
      </div>
`;
    }
  }, 800);
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progressBarText = document.getElementById("progress-bar-text");
  console.log(progressBar, progressBarText);
  const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
  progressBar.style.width = progressPercent + "%";
  if (currentQuestion < quizData.length) {
    progressBarText.textContent = `Question ${currentQuestion + 1} of ${
      quizData.length
    }`;
    document.getElementById("score").textContent = "Score: " + score;
  } else {
    progressBarText.textContent = `Quiz Completed!`;
    document.getElementById("score").textContent = "";
  }
}

showQuestion();
