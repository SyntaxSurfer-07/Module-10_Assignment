// Function 1: Calculate difference
function calculateDifference(a, b) {
    return a - b;
}

// Function 2: Check if odd
function isOdd(number) {
    return number % 2 !== 0;
}

// Function 3: Find minimum number
function findMin(numbers) {
    if (numbers.length === 0) {
        throw new Error("The array is empty.");
    }

    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// Function 4: Filter even numbers
function isEven(num) {
    return num % 2 === 0;
}
function filterEvenNumbers(numbers) {
    return numbers.filter(isEven);
}

// Function 5: Sort array in descending order
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}

// Function 6: Lowercase first letter
function lowercaseFirstLetter(string) {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

// Function 7: Find average
function findAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array.");
    }
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const average = sum / numbers.length; 
    return parseFloat(average.toFixed(3));;
}

// Function 8: Check if leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// All functions
console.log(calculateDifference(10, 5));
console.log(isOdd(3));
console.log(findMin([5, 2, 9, 1, 56, 34, -12, 34, -67, 89, -45, 90]));
console.log(filterEvenNumbers([1, 2, 3, 4, 6, 12, 23, 43, 54, 65]));
console.log(sortArrayDescending([34, 51, 22, 39, 83, 76]));
console.log(lowercaseFirstLetter("Rezwan"));
console.log(findAverage([4, 8, 34, 23, 67, 49]));
console.log(isLeapYear(2024));
