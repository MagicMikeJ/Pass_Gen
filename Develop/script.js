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
// How many characters is the length of your password? Must be between 8 and 128 characters.
  // Type your response in the box below
}

/**
 * Prompt user for use of upper and lower case characters
 *
 * @return {{ upperCase: boolean, lowerCase: boolean }} User selection
 */
function promptUpperLowerCase() {
// Would you like to use uppercase and/or lowercase characters?
// Please select at least one of the 2 checkboxes below.
}

/**
 * Prompt the user to use numeric characters
 *
 * @return {boolean} True: user selected yes
 */

function promptNumericCharacters() {
// Would you like to use numeric characters?
// Check the box for yes
}

/**
 * Prompt user to use special characters
 *
 * @return {boolean} True: user selected yes
 */

function promptSpecialCharacters() {
// Would you like to use special characters?
// Check the box for yes
}

/**
 * Validate user response from promptLengthOfPassword()
 *
 * @param {string} userInput Raw user response from promptLengthOfPassword()
 * @return {boolean} Response is valid or not
 */

function validateResponseLengthOfPassword(userInput) {
// Validate that the user has responded with a number value
// Validates that the length of the password is a minimum of 8 and a maximum of 128 characters
}




