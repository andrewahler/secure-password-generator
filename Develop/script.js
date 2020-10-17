
const passwordEl = document.getElementById(`password`);
const lengthEl = document.getElementById(`length`);
const uppercaseEl = document.getElementById(`uppercase`);
const lowercaseEl = document.getElementById(`lowercase`);
const numbersEl = document.getElementById(`numbers`);
const symbolsEl = document.getElementById(`symbols`);
const generateEl = document.getElementById(`generate`);

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol
}

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
if(!hasLower&& !hasUpper&& !hasNumber&&  !hasSymbol){
  passwordEl.innerText = "Please select at least one option!";
}else{
  if(length<8 || length > 128){
    passwordEl.innerText = "Please enter a valid length between 8 and 128!";
  }
  else{
  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  }
}
 
});

function generatePassword(lower, upper, number, symbol, length) {
  console.log(lower, upper, number, symbol, length)
  let generatePass = '';
  i = 0
 
  while (i < length) {

    if (lower && i < length) {
      generatePass += getRandomLower()
      i++
    }
    if (upper && i < length) {
      generatePass += getRandomUpper()
      i++
    }
    if (number && i < length) {
      generatePass += getRandomNumber()
      i++
    }
    if (symbol && i < length) {
      generatePass += getRandomSymbol()
      i++
    }
  }
  console.log(generatePass)
  return generatePass
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  symbols = `!@#$%^&*()_+=?/>.<, ~`;
  return symbols[Math.floor(Math.random() * symbols.length)];
}




