let numberToConvert = 0;
const dispay = document.querySelector("#userInput");

const imperialLenght = document.querySelector(".metric--value--lenght");
const imperialVolume = document.querySelector(".metric--value--volume");
const imperialMass = document.querySelector(".metric--value--mass");

const valueOfConvertm = document.querySelector(".imperial--value--lenght");
const valueOfConvertl = document.querySelector(".imperial--value--volume");
const valueOfConvertk = document.querySelector(".imperial--value--mass");

const nanAlert = document.querySelector(".nan_alert");

function convertValue() {
  numberToConvert = parseFloat(document.querySelector("#userInput").value);

  if (isNaN(numberToConvert)) {
    nanAlert.textContent = ` Please enter a valid number`;
  } else {
    let feetConverted = numberToConvert * 3.28084;
    imperialLenght.textContent = feetConverted.toFixed(2);

    let gallonConvert = numberToConvert * 0.264172;
    imperialVolume.textContent = gallonConvert.toFixed(2);

    let poundConvert = numberToConvert * 2.20462;
    imperialMass.textContent = poundConvert.toFixed(2);

    valueOfConvertm.textContent = ` ${numberToConvert}`;
    valueOfConvertl.textContent = ` ${numberToConvert}`;
    valueOfConvertk.textContent = ` ${numberToConvert}`;

    dispay.value = "";
  }
}
