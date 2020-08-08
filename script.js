// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = arrayLowToHigh(97, 122);
var uppercase = arrayLowToHigh(65, 90);
var numbers = arrayLowToHigh(48, 57);
var symbols = arrayLowToHigh(33, 47).concat(arrayLowToHigh (58, 64)).concat(arrayLowToHigh(91, 96)).concat(
  arrayLowToHigh(123, 126));
var passwordDisplay = document.getElementById('password');

// function to procure character arrays from charCode
function arrayLowToHigh(low, high) {
  var array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
   }
  return array
}

// function to generate random password
function generatePassword(rangeChar, upChar, specChar, numChar) {
  let passChar = lowercase;
  if (upChar === "yes") passChar = passChar.concat(uppercase);
  if (specChar === "yes") passChar = passChar.concat(symbols);
  if (numChar === "yes") passChar = passChar.concat(numbers);
 
   var passwordChar = [];
   for (let i =0; i < rangeChar; i++) {
   var passCode = passChar[Math.floor(Math.random() * passChar.length)];
   passwordChar.push(String.fromCharCode(passCode));
   }
 return passwordChar.join('');
 console.log (passwordChar.join(''));
 var passwordText = document.querySelector("#password");
}

// function to call criteria prompts and execute generatePassword
function writePassword() {
  var upChar = prompt("Do you want to use uppercase letters? 'yes' or 'no'");
  upChar = upChar.toLowerCase();
  if (upChar === "yes" || upChar === "no") {
    alert("You chose " + upChar + " for uppercase letters.");
  }
  else {
    alert("Error! Please enter a correct value");
    var upChar = prompt("Do you want to use uppercase letters? 'yes' or 'no'");
    alert("You chose " + upChar + " for uppercase letters.");
  }
    
  var numChar = prompt("Do you want to use numbers? 'yes' or 'no'");
  numChar = numChar.toLowerCase();
  if (numChar === "yes" || numChar === "no") {
    alert("You chose " + numChar + " for numbers.");
  }
  else {
    alert("Error! Please enter a correct value");
    var numChar = prompt("Do you want to use numbers? 'yes' or 'no'");
    alert("You chose " + numChar + " for numbers.");
  }
    
  var specChar = prompt("Do you want to use special characters? 'yes' or 'no'");
  specChar = specChar.toLowerCase();
  if (specChar === "yes" || specChar === "no") {
    alert("You chose " + specChar +  " for special characters.");
  }
  else {
    alert("Error! Please enter a correct value");
    var specChar = prompt("Do you want to use special characters? 'yes' or 'no'");
    alert("You chose " + specChar +  " for special characters.");
  }
    
  var rangeChar = prompt("How many characters long do you need your password; between 8 and 128");
  while (rangeChar <= 7 || rangeChar >= 129) {
    alert("Password length must be between 8 and 128 characters. Please enter valid amount.");
    var rangeChar = prompt("How many characters long do you need your password; between 8 and 128");
  }
    alert("You chose a password " + rangeChar + " characters long.")
  
    var passLength = rangeChar.value

  password = generatePassword(rangeChar, upChar, specChar, numChar);

  passwordDisplay.innerText = password;
   
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


