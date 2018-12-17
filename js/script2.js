let userNumber = Number(prompt("Enter natural number"));
let resultArr = [];

function printNaturalNumbers() {
  outer: for (let i = 2; i <= userNumber; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        continue outer;
      }
    }
    resultArr.push(i);
  }

  console.log("Natural numbers: " + resultArr);
}

if (isNaN(userNumber)) {
  console.log("Please enter numeric data");
} else {
  printNaturalNumbers();
}