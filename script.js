function computeBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const bmiResult = document.getElementById("bmiResult");
  const condition = document.getElementById("condition");

  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiResult.value = "";
    condition.textContent = "Please enter valid values.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  bmiResult.value = bmi.toFixed(10);

  if (bmi < 18.5) {
    condition.textContent = "Weight Condition: Underweight";
  } else if (bmi < 25) {
    condition.textContent = "Weight Condition: Normal weight";
  } else if (bmi < 30) {
    condition.textContent = "Weight Condition: Overweight";
  } else {
    condition.textContent = "Weight Condition: Obesity";
  }
}
