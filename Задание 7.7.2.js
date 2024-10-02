const calculate = (a, b, operator) => {
    if (operator === '+') {
        return a + b;
    }
    else if (operator === '-') {
        return a - b;
    }
    else if (operator === '*') {
        return a * b;
    }
    else if (operator === '/') {
        if (b != 0) {
            return a / b;
        }
        else {
            return 'На ноль делить нельзя!';
        }
    }
}
const operation = {
    a: 2,
    b: 3,
    operator: '+'
}
console.log(calculate.apply(operation, Object.values(operation)));