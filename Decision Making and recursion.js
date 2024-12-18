// Leap Year Checker
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

// Test Leap Year Checker
console.log("Leap Year Checker:");
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log("----------------------");

// Ticket Pricing
function getTicketPrice(age) {
    if (age <= 12) {
        return "$10";
    } else if (age >= 13 && age <= 17) {
        return "$15";
    } else {
        return "$20";
    }
}

// Test Ticket Pricing
console.log("Ticket Pricing:");
console.log(getTicketPrice(10)); // $10
console.log(getTicketPrice(15)); // $15
console.log(getTicketPrice(25)); // $20
console.log("----------------------");

// Weather Clothing Adviser
function clothingAdvice(temp, isRaining) {
    if (temp < 10) {
        return isRaining ? "Wear a heavy coat and take an umbrella." : "Wear a heavy coat.";
    } else if (temp >= 10 && temp <= 20) {
        return isRaining ? "Wear a light jacket and take an umbrella." : "Wear a light jacket.";
    } else {
        return isRaining ? "Wear light clothes and take an umbrella." : "Wear light clothes.";
    }
}

// Test Weather Clothing Adviser
console.log("Weather Clothing Adviser:");
console.log(clothingAdvice(5, true)); // Heavy coat and umbrella
console.log(clothingAdvice(15, false)); // Light jacket
console.log("----------------------");

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test Fibonacci Sequence
console.log("Fibonacci Sequence:");
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
console.log("----------------------");

// Palindrome Checker
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Clean string
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

// Test Palindrome Checker
console.log("Palindrome Checker:");
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
console.log("----------------------");

// Power Function
function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

// Test Power Function
console.log("Power Function:");
console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log("----------------------");
