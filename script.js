// Variables used for Password generator
var generateBtn = ""
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numberSel = "0123456789"
var symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~'"
var passwordLen = (8,128)


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Generate Password Function 
function generatePassword(){

  // User window criteria (true or false)
 
 var passwordLen = window.prompt("Please choose Password length between 8-128 characters ");
 if (passwordLen < 8 || passwordLen > 128){
   window.alert ("Please enter in valid amount.");
   return generatePassword(); }
 
 var uppercaseConfirm = window.confirm("Would you like password to have Upper Case Letters?"); 
 
   
 var lowercaseConfirm = window.confirm("Would you like passowrd to have Lower Case Letters?");
 
   
 var numberselConfirm = window.confirm("Would you like your password to have Numbers?");
  

 var symbolsConfirm = window.confirm("Do you want Symbols in your password ?");

//Generate password functions using arrays if window is confirmed

  //Console log for password fuctions
  console.log('passwordLen', passwordLen);
  console.log('uppercaseConfirm', uppercaseConfirm);
  console.log('lowercaseConfirm', lowercaseConfirm);
  console.log('numberselConfirm',numberselConfirm );
  console.log('symbolsConfirm', symbolsConfirm);

  //Mandatory charaters & Possible characters to include
  var allPossibleCharArray = "";

  //if user confirms window prompts 
  if (uppercaseConfirm === true) {
    allPossibleCharArray=allPossibleCharArray.concat(upperCase);
  }
  if (lowercaseConfirm === true) {
    allPossibleCharArray=allPossibleCharArray.concat(lowerCase);
  }
  if (numberselConfirm === true) {
    allPossibleCharArray=allPossibleCharArray.concat(numberSel);
  }
  if (symbolsConfirm === true) {
    allPossibleCharArray=allPossibleCharArray.concat(symbols);
  }

  console.log("allPossibleCharArray",allPossibleCharArray);
   
  // Random Generator through for loop 
  var password =''

  for (i = 0; i < passwordLen; i++){
    password += allPossibleCharArray.charAt(Math.floor(Math.random()*allPossibleCharArray.length));
  } 
  console.log("password", password );
  return password;
}
var passwordText = document.querySelector("#password");
  var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;        
}
