// Question: What are the popular JavaScript testing frameworks?
// Answer: 
/**
 * Test to verify that the function `popularTestingFrameworks` returns a list of popular JavaScript testing frameworks.
 * The expected frameworks are:
 * - Jest
 * - Mocha
 * - Jasmine
 * - AVA
 * - Cypress
 */

/**
 * Validates a credit card number and returns the card type.
 *
 * @param {string} cardNumber - The credit card number to validate.
 * @returns {string} - The type of the credit card (e.g., "VISA", "MasterCard", "American Express", "Discover") or "Invalid Card Number" if the card number is not valid.
 */
function validateCreditCard(cardNumber) {
    const cardTypes = {
        4: "VISA",
        5: "MasterCard",
        3: "American Express",
        6: "Discover"
    };

    if (cardNumber.length === 16 || cardNumber.length === 15) {
        const firstDigit = cardNumber.charAt(0);
        if (cardTypes[firstDigit]) {
            if ((firstDigit === '3' && cardNumber.length === 15) || (firstDigit !== '3' && cardNumber.length === 16)) {
                return cardTypes[firstDigit];
            }
        }
    }
    return "Invalid Card Number";
}

// Example usage of the validateCreditCard function
console.log(validateCreditCard("4111111111111111")); // Output: VISA
console.log(validateCreditCard("5500000000000004")); // Output: MasterCard
console.log(validateCreditCard("340000000000009"));  // Output: American Express
console.log(validateCreditCard("6011000000000004")); // Output: Discover
console.log(validateCreditCard("1234567890123456")); // Output: Invalid Card Number

