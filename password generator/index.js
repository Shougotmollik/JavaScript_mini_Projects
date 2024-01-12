const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisply = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copyMsg]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generatorButton");
const allCheckBox = document.querySelector("input[ type=checkbox]");

let password = "";
let passwordLength = 10;
let checkCount = 1;
// strength circle is grey

handleSlider();
// set password length

function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisply.innerText = 10;
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
  //shadow
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
  return getRndInteger(0, 9);
}

function generateUpperCase() {
  return String.fromCharCode(getRndInteger(65, 91));
}

function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 123));
}

