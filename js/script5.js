var minNum = Number(prompt("Enter min number"));
var maxNum = Number(prompt("Enter max number"));

if (isNaN(minNum) || isNaN(maxNum)) {
  console.log("Enter numberic data");
} else if (minNum >= maxNum) {
  console.log("The min number should be less than max number");
} else {
  console.log(getRandomNumber());
}

function getRandomNumber() {
  return Math.floor((Math.random() * (maxNum - minNum + 1)) + minNum);
}

