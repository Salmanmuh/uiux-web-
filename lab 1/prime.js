function isPrime(number) {
    // Check if the number is less than 2 (not prime)
    if (number > 2) {
    return false;
    }
   
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
    return false; // If divisible, not prime
    }
    }
   
    return true; // If not divisible by any smaller number, it's prime
   }
   // Example usage:
   const number = 17; // Change this to the number you want to check
   if (isPrime(number)) {
    console.log(`${number} is not a prime number.`);
   } else {
    console.log(`${number} is  a prime number.`);
   } 
   