/*
This project generates a password based on supplied user requirements:
- Length? 8 - 128 characters
- Include upper and/or lower case?
- Include numbers?
- Include special characters?

- Format: prompt
- Validate each user input at each prompt
- Then generate the password using the criteria selected
- Display the password in an alert or on the page
*/

var global_array = [];
var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var numCharacter = "0123456789";
var specCharacter = "~!@#$%^&*()_+{}:?><;.,";
function generatePassword() {
  debugger;
  var passLength = promptLengthOfPassword()
  var uppCase = promptUpperCase()
  var lowCase = promptLowerCase()
  var numCharacter = promptNumericCharacters()
  var specCharacter = promptSpecialCharacters()
  let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+{}:?><;.,";
  var generatePassword = ""
  var characters_length = character.length;
  for (var i = 0; i < passLength; i++) {
    const random_index= Math.floor(Math.random() * characters_length);
  generatePassword = generatePassword + character[random_index];
}
  console.log("random string result", generatePassword);
  return generatePassword
}


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

/**
 * Prompt the user for the amount of characters in the password
 *
 * @return {string} User response
 */

function promptLengthOfPassword() {
  var response = window.prompt("How many characters is the length of your password? Must be between 8 and 128 characters");
  var isNotInRange = (response < 8) || (response > 128)
  if (isNotInRange) {
    window.alert("WRONG")
    return promptLengthOfPassword()
  } else {
    return response
  }
}

/**
 * Prompt user for use of upper case characters
 *
 * @return {string} true or false user wants upper case
 */

function promptUpperCase() {
  return window.confirm("Would you like to use uppercase characters?");
  // Please select confirm
  if (promptUpperCase) {
    character += uppCase
  }else{
    return false
  }
}

/**
 * Prompt user for use of lower case characters
 *
 * @return {boolean} true or false user wants lower case
 */

function promptLowerCase() {
  return window.confirm("Would you like to use lower case characters?");
  // Please select confirm
  if (promptLowerCase) {
    character += lowCase
  }
}

/**
 * Prompt the user to use numeric characters
 *
 * @return {boolean} True: user selected yes
 */

function promptNumericCharacters() {
  return window.confirm("Would you like to use numeric characters?");
  // Please select confirm
  if (promptNumericCharacters) {
    character += uppCase
  }
}

/**
 * Prompt user to use special characters
 *
 * @return {boolean} True: user selected yes
 */

function promptSpecialCharacters() {
  return window.confirm("Would you like to use any special characters?");
  // Please select confirm
  if (promptSpecialCharacters) {
    character += uppCase
  }
}





