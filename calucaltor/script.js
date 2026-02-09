const display = document.getElementById("display");

function append(value) {
  if (display.value === "0") display.value = "";
  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
