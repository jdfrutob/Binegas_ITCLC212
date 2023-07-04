let display = document.getElementById("display");
let memory = document.getElementById("memory");

function appendValue(value) {
  display.value += value;
}

function clearEntry() {
  display.value = "";
}

function clearDisplay() {
  display.value = "";
  memory.innerHTML = "";
}

function calculate() {
  let expression = display.value;
  let result;

  try {
    result = eval(expression);
    memory.innerHTML += expression + " = " + result + "<br>";
  } catch (error) {
    alert("Error calculating. Check the expression.");
    result = "";
  }

  display.value = result;
}
function openLink(url) {
  window.open(url, "_blank");
}
