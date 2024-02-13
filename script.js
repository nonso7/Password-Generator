// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //initial state for password information
  let passInfo = ""
  console.log(passInfo)
  //list of chosen characters
  let passChars = [];
  let specialXters = getRandom(specialCharacters) 
  let upperCaseXters = getRandom(upperCasedCharacters) 
  let numericXters = getRandom(numericCharacters)
  let lowerCasedXters = getRandom(lowerCasedCharacters)
  
  let characterAmount = window.prompt("Enter the amount of characters you want for your password. NOTE: Must be between 8-128 characters")
  //console.log(passChars);
if(characterAmount >=8 && characterAmount < 129) {
  const getNumber = window.confirm("Would you like to include NUMBERS!!")

  if(getNumber) {
    passInfo += [...numericCharacters]
    console.log(passInfo)
    passChars.push(numericXters)
  }

  let getSpecialCharacters = window.confirm("Would you like to include SPECIAL characters?");

  if(getSpecialCharacters) {
    passInfo += [...specialCharacters]
    console.log(passInfo);
    passChars.push(specialXters)
  }

  let getLowerCaseCharacters = window.confirm("Would you like to include LOWERCASE characters?")

  if(getLowerCaseCharacters) {
    passInfo += [...lowerCasedCharacters]
    console.log(passInfo);
    passChars.push(lowerCasedXters)
  }

  let getUpperCaseCharacters = window.confirm("Would you like to include UPPERCASE characters?")

  if(getUpperCaseCharacters) {
    passInfo += [...upperCasedCharacters]
    console.log(passInfo);
    passChars.push(upperCaseXters)
  }

  if(!passInfo) {
    window.alert("You need to select at least one option, please try again!")
  }

  while (passChars.length < characterAmount) {
    // pick a random character from passInfo
    passChars.push(getRandom(passInfo));
  }

  // for (let i = passChars.length - 1; i > 0; i--) {
  //   const swapIndex = Math.floor(Math.random() * (i + 1));
  //   const temp = passChars[i];
  //   passChars[i] = passChars[swapIndex];
  //   passChars[swapIndex] = temp;
  // };
  return passChars.join("")

}else {
  window.alert("You need to provide a valid length!")
}
}


// Function for getting a random element from an array
function getRandom(arr) {
const randomXtersIndex =  Math.floor(Math.random() * arr.length)
console.log(randomXtersIndex)
const randomXters = arr[randomXtersIndex]
//console.log(randomXters);  
return randomXters
}


// Function to generate password with user input
function generatePassword() {
return getPasswordOptions()
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  if(password){
  passwordText.value = password;
  }else {
    passwordText.value = ""
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);