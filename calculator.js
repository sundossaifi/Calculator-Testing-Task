function calc(...args) {
    if (args.length < 3) throw new Error("Incorrect number of arguments");

    const numbers = [];
    const operations = [];

    for (let i = 0; i < args.length; i++) {
        if (i % 2 === 0) {
            let number = args[i];
            if (typeof number !== 'number') {
                throw new Error('Invalid input type');
            } else if (number <= 1000) {
                numbers.push(number);
            } else {
                i++;
            }
        } else {
            let operator = args[i];
            if (typeof operator === 'string' && ['+', '-', '*', '/'].includes(operator)) {
                operations.push(operator);
            } else {
                throw new Error('Invalid operator');
            }
        }
    }

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '*' || operations[i] === '/') {
            const num1 = numbers[i];
            const num2 = numbers[i + 1];

            if (operations[i] === '/') {
                if (num2 === 0) throw new Error("Division by zero");
                numbers[i] = num1 / num2;
            } else {
                numbers[i] = num1 * num2;
            }

            numbers.splice(i + 1, 1);
            operations.splice(i, 1);
            i--;
        }
    }

    let result = numbers[0];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            result += numbers[i + 1];
        }
        if (operations[i] === '-') {
            result -= numbers[i + 1];
        }
    }

    return result;
}

module.exports = calc;
