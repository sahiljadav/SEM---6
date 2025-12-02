function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) return a / b;
            else return "Error: Division by zero";
        default:
            return "Invalid operator";
    }
}


console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '-'));
console.log(calculator(10, 5, '*')); 
console.log(calculator(10, 5, '/')); 
console.log(calculator(10, 0, '/'));