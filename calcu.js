let expression = "";

// Append value to the expression
function appendValue(value) {
  expression += value;
  updateDisplay();
}

// Append operator to the expression
function operate(operator) {
  expression += ` ${operator} `;
  updateDisplay();
}

// Evaluate the expression
function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch {
    expression = "Error";
    updateDisplay();
  }
}

// Clear the expression
function clearResult() {
  expression = "";
  updateDisplay();
}

function deleteLast(){
    expression = expression.trim().slice(0,-1);
    updateDisplay();
}

// Update the display
function updateDisplay() {
  document.getElementById("result").value = expression;
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // If a number or dot is pressed
  if (!isNaN(key) || key === ".") {
    appendValue(key);
  }

  // If an operator is pressed
  if (["+", "-", "*", "/"].includes(key)) {
    operate(key);
  }

  // If Enter key is pressed
  if (key === "Enter") {
    calculate();
  }

  // If Backspace is pressed
  if (key === "Backspace") {
    expression = expression.slice(0, -1);
    updateDisplay();
  }

  // If Escape key is pressed
  if (key === "Escape") {
    clearResult();
  }
});