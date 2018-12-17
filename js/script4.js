let userString = prompt("Enter any string");
let userLetter = prompt("Enter any letter");
let result = getLetterCount(userString, userLetter);

console.log("The letter " + userLetter + " is " + result + " times in string \"" + userString + "\"");

function getLetterCount(string, letter) {
  let count = 0;
  let lowerCaseLetter = letter.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    let lowerCaseStringSymbol = string[i].toLowerCase();
    if (lowerCaseStringSymbol === lowerCaseLetter) {
      count++;
    }
  }

  return count;
}

