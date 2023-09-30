function factorialRecursive(n) {
    if (n === 0) {
    return 1;
    } else {
    return n * factorialRecursive(n - 1);
    }
   }
   // Example usage:
   const number = 5;
   const result = factorialRecursive(number);
   console.log(`Factorial of ${number} is ${result}`);