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
let pressedEqual = false;
let catchedError = false;
display.textContent = dValue;

numbers.forEach((element) => {
  element.addEventListener("click", () => {
    insertNum(element.id);
  });
});
percentBtn.addEventListener("click", () => {
  checkEnd();
  if (!(dValue === "0")) {
    insertNum("%");
  }
  if (pressedEqual) pressedEqual = false;
  value = "0";
});
devideBtn.addEventListener("click", () => {
  checkEnd();
  if (!(dValue === "0")) {
    insertNum("/");
  }
  if (pressedEqual) pressedEqual = false;
  value = "0";
});
multiplyBtn.addEventListener("click", () => {
  checkEnd();
  if (!(dValue === "0")) {
    insertNum("*");
  }
  if (pressedEqual) pressedEqual = false;
  value = "0";
});
plusBtn.addEventListener("click", () => {
  checkEnd();
  if (!(dValue === "0")) {
    insertNum("+");
  }
  if (pressedEqual) pressedEqual = false;
  value = "0";
});
minusBtn.addEventListener("click", () => {
  checkEnd();
  if (!(dValue === "0")) {
    insertNum("-");
  }
  if (pressedEqual) pressedEqual = false;
  value = "0";
});
dot.addEventListener("click", () => {
  insertNum(".");
});
equalBtn.addEventListener("click", () => {
  operate(dValue);
});

function insertNum(Num) {
  if (
    dValue === "0" ||
    (pressedEqual && !isNaN(Number(Num))) ||
    catchedError == true ||
    (pressedEqual && Num == ".")
  ) {
    dValue = "";
    value = dValue;
    pressedEqual = false;
    catchedError = false;
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
function operate(equation) {
  //create array contains all the numbers and operations
  let eq = equation.toString().match(/(\d+\.?\d*|[+\-*%/])/g);
  //split into tqo arrays (numbers,operations)
  let Snumbers = eq.filter((element) => {
    return !isNaN(element);
  });
  let numbers = Snumbers.map((element) => {
    return Number(element);
  });
  let operations = eq.filter((element) => {
    return isNaN(element);
  });
  //check if there are atleast two numbers to operate
  if (numbers.length >= 2 && operations.length >= 1) {
    while (operations.length > 0) {
      let result = operations.findIndex((element) => {
        return element == "*" || element == "%" || element == "/";
      });
      if (result != -1) {
        numbers[result] = singleOp(
          numbers[result],
          numbers[result + 1],
          operations[result],
        );
        numbers.splice(result + 1, 1);
        operations.splice(result, 1);
      } else {
        numbers[0] = singleOp(numbers[0], numbers[1], operations[0]);
        numbers.splice(1, 1);
        operations.splice(0, 1);
      }
    }
    dValue =
      numbers[0] === "ERROR"
        ? "ERROR"
        : parseFloat(numbers[0].toPrecision(10)).toString();
    value = dValue;
    display.textContent = dValue;
    if (!catchedError) pressedEqual = true;
  }
}

function singleOp(Num1, Num2, operation) {
  switch (operation) {
    case "%":
      return Num1 % Num2;
    case "*":
      return Num1 * Num2;
    case "/":
      if (Num2 == 0) {
        catchedError = true;
        return "ERROR";
      }
      return Num1 / Num2;
    case "+":
      return Num1 + Num2;
    case "-":
      return Num1 - Num2;
  }
}
