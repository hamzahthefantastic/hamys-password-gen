// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("Enter a password length (8-128 characters):");
  while (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    length = prompt("Enter a password length (8-128 characters):");
  }

  var lowercase = confirm("Include lowercase characters in the password?");
  var uppercase = confirm("Include uppercase characters in the password?");
  var number = confirm("Include numeric characters in the password?");
  var special = confirm("Include special characters in the password?");

  var characters = "";
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (number) {
    characters += "0123456789";
  }
  if (special) {
    characters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  }
  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
 