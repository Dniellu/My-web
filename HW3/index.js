const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTime;
let resultTime;

function updateResults() {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    errorEl.innerText = "Please enter valid height and weight!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
    }, 2000);
  } else {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    resultEl.innerText = `Your BMI is ${bmi}`;
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
    }, 10000);
  }
}

heightInput.addEventListener("input", updateResults);
weightInput.addEventListener("input", updateResults);
