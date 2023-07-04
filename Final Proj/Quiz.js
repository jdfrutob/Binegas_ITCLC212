const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What is the purpose of a CSS framework?",
    a: "To create responsive web designs",
    b: "To manage server-side operations",
    c: "To execute JavaScript functions",
    d: "To connect to databases",
    correct: "a",
  },
  {
    question: "What is the latest version of HTML?",
    a: "HTML4",
    b: "HTML5",
    c: "HTML6",
    d: "HTMLX",
    correct: "b",
  },
  {
    question:
      "Which programming language is often used for server-side development?",
    a: "Java",
    b: "JavaScript",
    c: "Python",
    d: "C#",
    correct: "a",
  },
  {
    question: "What does API stand for?",
    a: "Application Programming Interface",
    b: "Application Program Interface",
    c: "Application Processor Interface",
    d: "Advanced Programming Interface",
    correct: "a",
  },
  {
    question: "What is the purpose of the 'git' command?",
    a: "To compile code",
    b: "To test code",
    c: "To manage version control",
    d: "To debug code",
    correct: "c",
  },
  {
    question: "What is the file extension for a Cascading Style Sheet?",
    a: ".html",
    b: ".css",
    c: ".js",
    d: ".txt",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll("input[name='answer']");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const f_text = document.getElementById("f_text");
const g_text = document.getElementById("g_text");
const h_text = document.getElementById("h_text");
const i_text = document.getElementById("i_text");
const j_text = document.getElementById("j_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});


const progressBar = document.getElementById("progress-bar");
const submitButton = document.getElementById("submit");
const questionCount = 10;

let currentQuestion = 1;
function updateProgressBar() {
  const percent = (currentQuestion / questionCount) * 100;
  progressBar.style.width = percent + "%";
}

submitButton.addEventListener("click", function () {

  currentQuestion++;
  updateProgressBar();
}
);
