
// Variables used for Password generator
var generateBtn = ""
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numberSel = ["0","1","2","3","4","5","6","7","8","9"]
var symbols = ['"','!','#','$','%','&','(',')','*','+','-','.','/',';','<','=','>','?','@','[',']','^','_','{','|','}','~']
var passwordLen = (8,128)
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password =''


// User window criteria (true or false)
 
 var passwordLen = window.prompt("Please choose Password length between 8-128 characters ");


 var uppercaseConfirm = window.confirm("Would you like password to have Upper Case Letters?"); 
 
   
 var lowercaseConfirm = window.confirm("Would you like passowrd to have Lower Case Letters?");
 
   
 var numberselConfirm = window.confirm("Would you like your password to have Numbers?");
  

 var symbolsConfirm = window.confirm("Do you want Symbols in your password ?");

//Generate password functions using arrays if window is confirmed

function generatePassword(){

//Console log for password fuctions
console.log('passwordLen', passwordLen);
console.log('uppercaseConfirm', uppercaseConfirm);
console.log('lowercaseConfirm', lowercaseConfirm);
console.log('numberselConfirm',numberselConfirm );
console.log('symbolsConfirm', symbolsConfirm);

//Mandatory charaters & Possible characters to include
var allPossibleCharArray = [];
var mandatoryCharArray = [];


//if user confirms window prompts then ...
if (uppercaseConfirm === true) {
  allPossibleCharArray=allPossibleCharArray.concat(upperCase);
console.log("allPossibleCharArray",allPossibleCharArray)
    var upperCaseIndex = Math.floor(Math.random()*upperCase.length);
    mandatoryCharArray.push(upperCase[upperCaseIndex])
    console.log("mandatoryCharArray",mandatoryCharArray) 
    
if (lowercaseConfirm === true) {
  allPossibleCharArray=allPossibleCharArray.concat(lowerCase);
console.log("allPossibleCharArray",allPossibleCharArray)
    var lowerCaseIndex = Math.floor(Math.random()*lowerCase.length);
    mandatoryCharArray.push(lowerCase[lowerCaseIndex])
    console.log("mandatoryCharArray",mandatoryCharArray)

if (numberSelConfirm === true) {
      allPossibleCharArray=allPossibleCharArray.concat(numberSel);
    console.log("allPossibleCharArray",allPossibleCharArray)
        var numberSelIndex = Math.floor(Math.random()*numberSel.length);
        mandatoryCharArray.push(numberlSel[numberSelIndex])
        console.log("mandatoryCharArray",mandatoryCharArray)

if (symbolsConfirm === true) {
          allPossibleCharArray=allPossibleCharArray.concat(symbols);
        console.log("allPossibleCharArray",allPossibleCharArray)
            var symbolsIndex = Math.floor(Math.random()*symbols.length);
            mandatoryCharArray.push(symbols[symbolsIndex])
            console.log("mandatoryCharArray",mandatoryCharArray)

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;        
}
