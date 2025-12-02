var start = 10;
var end = 20;

console.log("Prime numbers between " + start + " and " + end + ":");

for (let num = start; num <= end; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime && num > 1) {
        console.log(num);
    }
}
