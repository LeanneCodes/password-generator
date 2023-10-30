// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  var length = parseInt(prompt("Enter the password length (between 8 and 128 characters inclusive):"));
  console.log(length);

  // Check if the length is a valid number
  /* 
    isNan checks if the input is a number.
    If the input is less than 8 characters or grater than 128 characters,
    then the if statement returns null, which means nothing has been return.
  */
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid number between 8 and 128.");
    return null;
  }

  // Confirm statements for character types
  /*
    A series of confirm statements for the user to decide what
    type of characters they would like in their password.
  */
  var specialChar = confirm("Would you like to include special characters?");
  console.log(specialChar);

  var numChar = confirm("Would you like to include numeric characters?");
  console.log(numChar);

  var lowerChar = confirm("Would you like to include lowercase characters?");
  console.log(lowerChar);

  var upperChar = confirm("Would you like to include uppercase characters?");
  console.log(upperChar);

  // Check if at least one character type is selected
  /*
    For the password generator to work, at least one character
    needs to be selected. If the user rejects all character types,
    nothing will be returned.
  */
  if (!specialChar && !numChar && !lowerChar && !upperChar) {
    alert("Please select at least one character type.");
    return null;
  }

  // Store user choices in an object
  /*
    In order to access the choices the user selects, we must
    store them in an object, so that we can access these values
    later on. Returning the passwordOptions, will allow us to do
    that. I used MDN web docs to help construct this object to
    store all the variables.
  */
  var passwordOptions = {
    length: length,
    specialChar: specialChar,
    numChar: numChar,
    lowerChar: lowerChar,
    upperChar: upperChar
  };

  console.log(passwordOptions);

  return passwordOptions;
}

// Function for getting a random element from an array
/*
  We now need to get a random number, so that we can use
  this as an index number to find a character in the array.
  This function code was inspired by w3resource.com
*/
function getRandom(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomNum];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  // accessing the passwordOptions object here
  var options = getPasswordOptions();
  console.log(options);

  // Returns an empty string if options are not valid
  if (!options) {
    return "";
  }

  /*
    We now need to create an empty string, as we will concatenate
    strings based on the user's options from the confirm statements.
  */
  var allCharacters = [];

  /*
    The password will initially be an empty string. But as we iterate
    through the all the possible chaarcters that could be in the password,
    random elements will be chosen to be in the password.
  */
  var passwordString = "";
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);