let numberToConvert = 0;
const dispay = document.querySelector("#userInput");
const convertBtn = document.querySelector("#convertBtn");

// .................... unit holders ...........................

const imperialLenght = document.querySelector(".metric--value--lenght");
const imperialVolume = document.querySelector(".metric--value--volume");
const imperialMass = document.querySelector(".metric--value--mass");

const valueOfConvertm = document.querySelector(".imperial--value--lenght");
const valueOfConvertl = document.querySelector(".imperial--value--volume");
const valueOfConvertk = document.querySelector(".imperial--value--mass");

// ................... text placeholder variables........................

let unitText = document.querySelector(".unit__text");
let unitTextTo = document.querySelector(".unit__text--to");
let unitReverseM = document.querySelector(".unit__reversem");
let unitReverseL = document.querySelector(".unit__reversel");
let unitReverseK = document.querySelector(".unit__reversek");
let unitReverseF = document.querySelector(".unit__reversef");
let unitReverseG = document.querySelector(".unit__reverseg");
let unitReverseP = document.querySelector(".unit__reversep");

// .................... other variables ............................

const switchUnits = document.querySelector("#unit__switch");
let metricOn = false;
let imperialOn = true;
let unitSwitcher = false;
let convertDoneMetric = false;
let convertDoneImperial = false;

const nanAlert = document.querySelector(".nan_alert");

// ............ Logic ..........................................................

convertBtn.addEventListener("click", function () {
  if (unitSwitcher === false) {
    convertDoneMetric = true;
    convertValue();
  } else {
    convertValueReverse();
  }
});

switchUnits.addEventListener("click", function () {
  unitSwitcher = true;
  imperialOn = false;
  document.querySelector("#userInput").placeholder = "imperial unit";

  if (unitSwitcher === true && imperialOn === false) {
    unitText.textContent = "Imperial";
    unitTextTo.textContent = "Metric";

    unitReverseM.textContent = "Meters";
    unitReverseL.textContent = "Liters";
    unitReverseK.textContent = "Kilograms";

    unitReverseF.textContent = "Feet";
    unitReverseG.textContent = "Gallon";
    unitReverseP.textContent = "Pound";

    document.querySelector("#user");

    convertValueReverse();
  } else if (convertDoneMetric === true) {
    convertValue();
  }
});

function convertValue() {
  numberToConvert = parseFloat(document.querySelector("#userInput").value);

  if (isNaN(numberToConvert)) {
    alert("Please enter a valid number");
  } else if (unitSwitcher != true) {
    let feetConverted = numberToConvert * 3.28084;
    imperialLenght.textContent = feetConverted.toFixed(2);

    let gallonConvert = numberToConvert * 0.264172;
    imperialVolume.textContent = gallonConvert.toFixed(2);

    let poundConvert = numberToConvert * 2.20462;
    imperialMass.textContent = poundConvert.toFixed(2);

    valueOfConvertm.textContent = ` ${numberToConvert}`;
    valueOfConvertl.textContent = ` ${numberToConvert}`;
    valueOfConvertk.textContent = ` ${numberToConvert}`;
  }
}

function convertValueReverse() {
  numberToConvert = parseFloat(document.querySelector("#userInput").value);
  if (isNaN(numberToConvert)) {
    alert("Please enter a valid number");
  } else {
    let feetConverted = numberToConvert / 3.28084;
    imperialLenght.textContent = feetConverted.toFixed(2);

    let gallonConvert = numberToConvert / 0.264172;
    imperialVolume.textContent = gallonConvert.toFixed(2);

    let poundConvert = numberToConvert / 2.20462;
    imperialMass.textContent = poundConvert.toFixed(2);

    valueOfConvertm.textContent = ` ${numberToConvert}`;
    valueOfConvertl.textContent = ` ${numberToConvert}`;
    valueOfConvertk.textContent = ` ${numberToConvert}`;
  }
}
