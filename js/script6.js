let userNumber = Number(prompt("Enter number"));

function findFibonacci() {
    let sqrt = Math.sqrt(5);
    let a = Math.pow((1 + sqrt) / 2, userNumber);
    let b = Math.pow((1 - sqrt) / 2, userNumber);

    return Math.round((a - b) / sqrt);
}

function findFibonacciRecursion(n) {
    return n <= 1 ? n : findFibonacciRecursion(n - 1) + findFibonacciRecursion(n - 2);
}

if (isNaN(userNumber)) {
    console.log("Please enter numeric data");
} else {
    console.log("Fibonacci number for " + userNumber + " is ");
    console.log("w/o recursion: " + findFibonacci());
    console.log("w/ recursion: " + findFibonacciRecursion(userNumber));
}