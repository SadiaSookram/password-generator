
// Variables used for Password generator
var generateBtn = ""
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numberSel = "0123456789";
var symbols = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";
var passwordLen = (8,128)
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// User window criteria (true or false)

 var passwordLen = window.prompt("Please choose Password length between 8-128 characters ");


 var uppercaseConfirm = window.confirm("Would you like password to have Upper Case Letters?"); 
 
   
 var lowercaseConfirm = window.confirm("Would you like passowrd to have Lower Case Letters?");
 
   
 var numberselConfirm = window.confirm("Would you like your password to have Numbers?");
  

 var symbolsconfirm = window.confirm("Do you want Symbols in your password ?");

 //Generator Functions if window is confirmed

if (uppercaseConfirm === true) {
  var upperCase = Math.floor(Math.random()*upperCase.length);}
  
if (lowercaseConfirm === true) {
    var lowerCase = Math.floor(Math.random()*lowerCase.length);}

if (numberselConfirm === true) {
      var numberSel = Math.floor(Math.random()*numberSel.length);}

if (symbolsconfirm === true) {
      var symbols = Math.floor(Math.random()*symbols.length);} 

        
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password & for loop

function generatePassword(upperCase , lowerCase, numberSel, symbol, passwordlen)
var password ='';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
};



