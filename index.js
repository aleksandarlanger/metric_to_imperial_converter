const convertBtn = document.querySelector("#convertBtn");
const switchUnits = document.querySelector("#unit__switch");
const nanAlert = document.querySelector(".nan_alert");
const display = document.querySelector("#userInput");
let numberToConvert = 0;
let numberToBeConverted = [];
let switcher = false;
let startState = true;

convertBtn.addEventListener("click", converter);
switchUnits.addEventListener("click", reverseCalc);

function converter() {
  if (switcher === false) {
    numberToConvert = parseFloat(document.querySelector("#userInput").value);
    numberToBeConverted.push(numberToConvert);
    for (const userNumber of numberToBeConverted) {
      document.querySelector(".metric--value--lenght").textContent = (
        userNumber * 3.28084
      ).toFixed(2);
      document.querySelector(".metric--value--volume").textContent = (
        userNumber * 0.264172
      ).toFixed(2);
      document.querySelector(".metric--value--mass").textContent = (
        userNumber * 2.20462
      ).toFixed(2);
      document.querySelector(
        ".imperial--value--lenght"
      ).textContent = ` ${numberToConvert}`;
      document.querySelector(
        ".imperial--value--volume"
      ).textContent = ` ${numberToConvert}`;
      document.querySelector(
        ".imperial--value--mass"
      ).textContent = `${numberToConvert}`;
      numberToBeConverted = [];
      switcher = true;
    }
  }

  document.querySelector(".unit__text").textContent = "Metric to";
  document.querySelector(".unit__text--to").textContent = "Imperial";
  document.querySelector(".unit__reversem").textContent = "Feet";
  document.querySelector(".unit__reversel").textContent = "Gallons";
  document.querySelector(".unit__reversek").textContent = "Pounds";
  document.querySelector(".unit__reversef").textContent = "Meters";
  document.querySelector(".unit__reverseg").textContent = "Litters";
  document.querySelector(".unit__reversep").textContent = "Kilograms";
}

function reverseCalc() {
  numberToConvert = parseFloat(document.querySelector("#userInput").value);
  numberToBeConverted.push(numberToConvert);

  if ((switcher === true) | (startState === true)) {
    for (const userNumber of numberToBeConverted) {
      document.querySelector(".metric--value--lenght").textContent = (
        userNumber / 3.28084
      ).toFixed(2);
      document.querySelector(".metric--value--volume").textContent = (
        userNumber / 0.264172
      ).toFixed(2);
      document.querySelector(".imperial--value--mass").textContent = (
        userNumber / 2.20462
      ).toFixed(2);
      document.querySelector(
        ".imperial--value--lenght"
      ).textContent = ` ${numberToConvert}`;
      document.querySelector(
        ".imperial--value--volume"
      ).textContent = ` ${numberToConvert}`;
      document.querySelector(
        ".imperial--value--mass"
      ).textContent = ` ${numberToConvert}`;

      document.querySelector(".unit__text").textContent = "Imperial to";
      document.querySelector(".unit__text--to").textContent = "Metric";
      document.querySelector(".unit__reversem").textContent = "Meters";
      document.querySelector(".unit__reversel").textContent = "Liters";
      document.querySelector(".unit__reversek").textContent = "Kilograms";
      document.querySelector(".unit__reversef").textContent = "Feet";
      document.querySelector(".unit__reverseg").textContent = "Gallon";
      document.querySelector(".unit__reversep").textContent = "Pound";
      numberToBeConverted = [];
      switcher = false;
    }
  } else {
    converter();
  }
}
