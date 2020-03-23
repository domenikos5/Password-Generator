// Assignment Code
var passwordTextArea = document.getElementById("password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById("generatePasswordButton").addEventListener("click", generatePassword);