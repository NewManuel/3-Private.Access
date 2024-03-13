// This is the selector on the document where the password will appear
var generateBtn = document.querySelector("#generate");
// All the characters that can be chosen to generate a password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitolCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialsymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "="];
var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// The entire array of objects are envoked in this variable
var allInOne = [];




// Write password to the #password input
function formPassword() {
  var passkey = createPassword();
  allInOne = [];
  var passkeyText = document.querySelector("#password");
  passkeyText.value = passkey;

}

function createPassword() {
  var characterAmount = prompt("How many characters would you like in your password? 8-128");
  var gotIt = "";
  createPrompt();
  if (isNaN(characterAmount)) {
    console.log("Numbers only!");
  } else if (characterAmount < 8 || characterAmount > 128) {
    console.log("Please choose a number from 8-128");
    characterAmount = null;
  }
  for (let i = 0; i < allInOne.length; i++) {
    var format = Math.floor(Math.random() * allInOne.length);
    gotIt += allInOne[format];
  }  
  return gotIt.slice(0, characterAmount);
}

function createPrompt() {
  var UpCase = prompt("Wouold you like to use uppercase characters? y/n");
  var lowCase = prompt("Would you like lowercase characters? y/n");
  var digCharacter = prompt("Would you like numbers? yes/no");
  var symCharacter = prompt("Would you like special characters? y/n");

  if (UpCase === "yes") {
    allInOne = capitolCase.concat(allInOne);
  } else {
    console.log("Input Error!");
  }
  if (lowCase === "yes") {
    allInOne = lowerCase.concat(allInOne);
  } else {
    console.log("Input Error!");
  }
  if (digCharacter === "yes") {
    allInOne = digits.concat(allInOne);
  } else {
    console.log("Input Error!");
  }
  if (symCharacter === "yes") {
    allInOne = specialsymbols.concat(allInOne);
  } else {
    console.log("Input Error!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", formPassword);
