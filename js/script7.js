let userString = prompt("Enter string");

function reverseString() {
  let output = "";
  for (let i = userString.length - 1; i >= 0; i--) {
    output += userString[i];
  }

  return output;
}

console.log("Reversed string for \"" + userString + "\" is \"" + reverseString() + "\"");