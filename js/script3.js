let startNum = 1;
let endNum = 100;

for (let i = startNum; i < endNum; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log(i + " FizzBuzz");
        } else {
            console.log(i + " Fizz");
        }
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}
