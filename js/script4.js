let userString = prompt("Enter any string");
let userLetter = prompt("Enter any letter");

function getLetterCount() {
    let count = 0;

    for (let i = 0; i < userString.length; i++) {
        if (userString[i].toLowerCase() === userLetter.toLowerCase()) {
            count++;
        }
    }

    return count;
}

console.log("The letter " + userLetter + " is " + getLetterCount() + " times in string \"" + userString + "\"");