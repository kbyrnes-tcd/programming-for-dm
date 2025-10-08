// Define a function with the parameters: amount, sourceCurrency, and targetCurrency
// Use an if statement to check if the sourceCurrency is USD or EUR
// Use an if statement to check if the targetCurrency is USD or EUR
// Rate: 1 USD = 0.85 EUR

//function convert(amount, sourceCurrency, targetCurrency) {
//    if (sourceCurrency === "USD" && targetCurrency === "EUR") {
//        return amount * 0.85;
//    } else if (sourceCurrency === "EUR" && targetCurrency === "USD") {
//        return amount / 0.85;
//    } else {
//        return "Conversion not supported.";
//    }
//}

// Test above function:
//console.log(convert(100, "USD", "EUR"))
//console.log(convert(100, "EUR", "USD"))
//console.log(convert(2800, "EUR", "USD"))

// YAY. Is there a way to define the rate in a variable instead of hardcoding them?
//---------------------------------lesson learned: you have to validate inside the function------------------------------//

let rate = 0.85;

function convert(amount, sourceCurrency, targetCurrency) {
    // Validate the amount
    if (typeof amount !== 'number' || amount < 0){
        return "Invalid amount. Please enter a positive number.";
    }

    if (sourceCurrency === "USD" && targetCurrency === "EUR") {
        return amount * rate;
    } else if (sourceCurrency === "EUR" && targetCurrency === "USD") {
        return amount / rate;
    } else {
        return "Conversion not supported.";
    }
}

// Test:
console.log(convert(100, "USD", "EUR"))
console.log(convert(100, "EUR", "USD"))
console.log(convert(2800, "EUR", "USD"))
console.log(convert(-50, "USD", "EUR"))
console.log(convert("fifty", "USD", "EUR"))
console.log(convert(100, "GBP", "EUR"))
