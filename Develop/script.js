// Variables used for Password generator
var generateBtn = ""
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numberSel = "0123456789";
var symbols = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";
var passwordLen = "16"
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate Password
for (var i = 0; i < passwordLen; i++){

  var uppercaseConfirm = window.confirm("Would you like password to have Upper Case Letters?");
  // If yes add upperCase letter
  if (uppercaseConfirm) {
    upperCase = Math.floor(Math.random()*upperCase.length);
 
   
  var lowercaseConfirm = window.confirm("Would you like passowrd to have Lower Case Letters?");
  // If yes add LowerCase letter
  if (lowercaseConfirm) {
    lowerCase = Math.floor(Math.random()*lowerCase.length);
    
  var numberselConfirm = window.confirm("Would you like your oassword to have Numbers?");
  // If yes add numbers
  if (numberselConfirm) {
    numberSel = Math.floor(Math.random()*numberSel.length);

  var symbolsconfirm = window.confirm("Do you want Symbols in your password ?");
  if (symbolsconfirm) {
    symbols = Math.floor(Math.random()*symbols.length)
  }
 
  passwordText.value = password(numberSel, symbols,passwordLen,upperCase,lowerCase);
  generateBtn.addEventListener("click", writePassword);
}
}
  }
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
