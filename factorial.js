function factorial(n) {
    if (n < 0) return undefined; // Factorial of a negative number is undefined
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
