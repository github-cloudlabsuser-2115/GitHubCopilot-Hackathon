//doc
function getRandomInt(min, max) {
  if (typeof min !== "number" || typeof max !== "number" || min > max) {
    throw new Error(
      "Invalid arguments: 'min' must be less than 'max' and both must be numbers."
    );
  }
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

//explain
/**
 * Calculates the area of a circle given its radius.
 *
 * @param {number} radius - The radius of the circle. Must be a non-negative number.
 * @returns {number} The area of the circle.
 * @throws {TypeError} If the radius is not a non-negative number.
 */
function calculateCircleArea(radius) {
  if (typeof radius !== "number" || radius < 0) {
    throw new TypeError("The radius must be a non-negative number.");
  }
  return Math.PI * radius * radius;
}

/**
 * Constructs a full name by combining the first name and last name.
 *
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {string} The full name.
 * @throws {TypeError} If either firstName or lastName is not a string.
 */
function constructFullName(firstName, lastName) {
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    throw new TypeError("The names must be strings.");
  }
  return `${firstName} ${lastName}`;
}

//fix
/**
 * Validates a credit card number and returns the card type.
 *
 * @param {string} cardNumber - The credit card number to validate.
 * @returns {string} - The type of the credit card (e.g., "VISA", "MasterCard", "American Express", "Discover") or "Invalid Card Number" if the card number is not valid.
 */
function validateCreditCard2(cardNumber) {
  if (cardNumber.length === 16) {
    if (cardNumber.startsWith("4")) {
      return "VISA";
    } else if (cardNumber.startsWith("5")) {
      return "MasterCard";
    } else if (cardNumber.startsWith("6")) {
      return "Discover";
    } else {
      return "Invalid Card Number";
    }
  } else if (cardNumber.length === 15 && cardNumber.startsWith("3")) {
    return "American Express";
  } else {
    return "Invalid Card Number";
  }
}

//fix right-click
/**
 * Finds the largest number in an array of numbers.
 *
 * @param {number[]} arrayOfNumbers - The array of numbers to search through.
 * @returns {number|null} The largest number in the array, or null if the array is empty.
 * @throws {TypeError} If the array contains non-number elements.
 */
function findLargestNumber(arrayOfNumbers) {
  let largest = null; // Corrected assignment operator
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (typeof arrayOfNumbers[i] !== "number") { // Corrected `typeof` usage
      throw new TypeError("Array must contain only numbers.");
    }
    
    if (arrayOfNumbers[i] > largest) { // Removed extraneous '.'
      largest = arrayOfNumbers[i]; // Corrected variable name
    }
  }
  
  return largest;
}

