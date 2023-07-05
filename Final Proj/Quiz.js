class question_data {
  constructor(question, choices, correct_answer, selected_answer) {
    this.question = question;
    this.choices = choices;
    this.correct_answer = correct_answer;
    this.selected_answer = selected_answer;
  }
}

const questions = [
  new question_data(
    "Which language runs in a web browser?",
    ["Java", "C", "Python", "JavaScript"],
    "d",
    null
  ),
  new question_data(
    "What does CSS stand for?",
    ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    "b",
    null
  ),
  new question_data(
    "What does HTML stand for?",
    ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
    "a",
    null
  ),
  new question_data(
    "What year was JavaScript launched?",
    ["1996", "1995", "1994", "None of the above"],
    "b",
    null
  ),
  new question_data(
    "What is the purpose of a CSS framework?",
    ["To create responsive web designs", "To implement changes", "To execute JavaScript functions", "To connect to databases"],
    "a",
    null
  ),
  new question_data(
    "What is the latest version of HTML?",
    ["HTML4", "HTML5", "HTML6", "HTMLX"],
    "b",
    null
  ),
  new question_data(
    "Which programming language is often used for server-side development?",
    ["Java", "JavaScript", "Python", "C#"],
    "a",
    null
  ),
  new question_data(
    "What does API stand for?",
    ["Application Programming Interface", "Application Program Interface", "Application Processor Interface", "Advanced Programming Interface"],
    "a",
    null
  ),
  new question_data(
    "What is the file extension for a Cascading Style Sheet?",
    [".html", ".css", ".js", ".txt"],
    "b",
    null
  ),
  new question_data(
    "What is the purpose of the 'git' command?",
    ["To compile code", "To test code", "To manage version control", "To debug code"],
    "c",
    null
  )
];

const progressBar = document.getElementById("progress-bar");
const timerEl = document.getElementById("timer");


let random_index;
let answered = 0;
let timer = 0;
let used_questions = [];
const choices = ['a', 'b', 'c', 'd'];

function displayQuestion() {
  do {
    random_index = Math.floor(Math.random() * questions.length);
  } while (used_questions.includes(random_index));

  used_questions.push(random_index);

  const current_question = questions[random_index];
  const question_element = document.getElementById('question');


  question_element.textContent = current_question.question;

  for (let i = 0; i < choices.length; i++) {
    const choice_element = document.getElementById(choices[i]);
    const choice_element_text = document.getElementById(choices[i] + '_text');

    choice_element.value = current_question.choices[i];
    choice_element_text.textContent = current_question.choices[i];
    choice_element.checked = false;
  }

  updateProgressBar();
  resetTimer(); 
  startTimer(); 
}

function submit() {

  const selected_answer = document.querySelector('input[name="answer"]:checked').id;
  questions[random_index].selected_answer = selected_answer;
  answered++;
  stopTimer();

  if (answered < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function updateProgressBar() {
const percent = (answered / questions.length) * 100;
progressBar.style.width = percent + "%";
}

function showResults() {

  let passing_score = Math.ceil((.70*questions.length));
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
      if (questions[i].selected_answer === questions[i].correct_answer) {
        score++;
      }
    }

  quiz.innerHTML = `
    <h2>You answered ${score}/${questions.length} questions correctly</h2>
    <br>
    <h2>You made ${questions.length - score} mistakes!</h2>
  `;

  showQuestions();

  quiz.innerHTML += `
    <button class="main_button" onclick="location.href='main.html'">Reload</button>
  `;

  if(score >= passing_score){
    playVictoryMusic();
  }
  else{
    playFailMusic();
  }
}

function showQuestions() {
  const quiz_element = document.getElementById('quiz');

  for (let i = 0; i < questions.length; i++) {
    const question_data = questions[i];
    if (question_data.selected_answer != question_data.correct_answer) {
      const question_div = document.createElement('div');
  
      const question_text = document.createElement('h3');
      question_text.textContent = `${i + 1}) ${question_data.question}`;
      question_div.appendChild(question_text);

      const selected_answer = document.createElement('h4');
      let selected_answer_text = "";
      if (question_data.selected_answer && choices.indexOf(question_data.selected_answer) !== -1) {
        selected_answer_text = question_data.choices[choices.indexOf(question_data.selected_answer)];
      }
      selected_answer.textContent = `Selected Answer: ${question_data.selected_answer ? question_data.selected_answer + ". " + selected_answer_text : 'Not answered'}`;
      question_div.appendChild(selected_answer);
  
      const correct_answer = document.createElement('h4');
      const correct_answer_text = question_data.choices[choices.indexOf(question_data.correct_answer)];
      correct_answer.textContent = `Correct Answer: ${question_data.correct_answer}. ${correct_answer_text}`;
      question_div.appendChild(correct_answer);
      quiz_element.appendChild(question_div);

      quiz_element.appendChild(document.createElement('br'));
    }
  }
}


function playVictoryMusic(){
var music = new Audio('victory.mp3');
music.play();
}
function playFailMusic(){
var music = new Audio('fail.mp3');
music.play();
}

function startTimer() {
let timeLeft = 10;
let timerWidth = 100;

timer = setInterval(() => {
  timeLeft--;

  if (timeLeft >= 0) {
    timerWidth -= 10;
    timerEl.style.width = timerWidth + "%";
  } else {
    answered++;
    stopTimer();

    if (answered < questions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }
}, 1000);
}

function resetTimer() {
timerEl.style.width = "100%";
}

function stopTimer() {
clearInterval(timer);
}

document.getElementById('submit').addEventListener('click', submit);

displayQuestion();