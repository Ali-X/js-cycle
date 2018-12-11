let message = "Enter number than is more than 100";
let userNumber;

do {
    let userNumberStr = prompt(message);

    if (userNumberStr == null) {
        break;
    } else {
        userNumber = Number(userNumberStr);

        if (isNaN(userNumber)) {
            message = "Enter numeric data";
        } else {
            message = "The number should be more than 100";
        }
    }
}
while (userNumber <= 100 || isNaN(userNumber))

console.log("Your number is " + userNumber);