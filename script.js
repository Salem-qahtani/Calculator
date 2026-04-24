const numbers = document.querySelectorAll(".numbers");
const deleteBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");
const percentBtn = document.getElementById("percent");
const devideBtn = document.getElementById("/");
const multiplyBtn = document.getElementById("*");
const plusBtn = document.getElementById("+");
const minusBtn = document.getElementById("-");
const equalBtn = document.getElementById("equal");
const display = document.getElementById("display");
const dot = document.getElementById(".");
let dValue = "0";
let value = "0";
display.textContent = dValue;

numbers.forEach((element) => {
  element.addEventListener("click", () => {
    insertNum(element.id);
  });
});
percentBtn.addEventListener("click", () => {
  checkEnd();
  insertNum("%");
  value = "0";
});
devideBtn.addEventListener("click", () => {
  checkEnd();
  insertNum("/");
  value = "0";
});
multiplyBtn.addEventListener("click", () => {
  checkEnd();
  insertNum("*");
  value = "0";
});
plusBtn.addEventListener("click", () => {
  checkEnd();
  insertNum("+");
  value = "0";
});
minusBtn.addEventListener("click", () => {
  checkEnd();
  insertNum("-");
  value = "0";
});
dot.addEventListener("click", () => {
  insertNum(".");
});
equalBtn.addEventListener("click", () => {
  operate(dValue);
});

function insertNum(Num) {
  if (dValue === "0") {
    dValue = "";
  }
  if (Num != ".") {
    dValue += Num;
    value += Num;
    display.textContent = dValue;
  } else {
    if (!value.toString().includes(".")) {
      if (endWithOperation() || dValue == "") {
        dValue += `0.`;
        value += `0.`;
        display.textContent = dValue;
      } else {
        dValue += Num;
        value += Num;
        display.textContent = dValue;
      }
    }
  }
}
//Checks if the equation ends with a dot or an operation and swap it with the clicked operation
function checkEnd() {
  if (endWithOperation() || dValue.endsWith(".")) {
    dValue = dValue.slice(0, -1);
  }
}
//Delete button
deleteBtn.addEventListener("click", () => {
  if (endWithOperation()) {
    value = dValue;
  }
  if (dValue.endsWith(".")) {
    value = "0";
  }
  dValue = dValue.slice(0, -1);
  display.textContent = dValue;
  if (dValue.length == 0) {
    dValue = "0";
    display.textContent = dValue;
  }
  //Clear button
});
clearBtn.addEventListener("click", () => {
  dValue = "0";
  value = "0";
  display.textContent = dValue;
});
//Check if the Equation ends with an operation
function endWithOperation() {
  if (
    dValue.endsWith("%") ||
    dValue.endsWith("*") ||
    dValue.endsWith("/") ||
    dValue.endsWith("+") ||
    dValue.endsWith("-")
  ) {
    return true;
  } else return false;
}
function operate(operation) {}
