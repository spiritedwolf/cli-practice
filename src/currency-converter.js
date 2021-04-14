// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.
const axios = require("axios");


// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.
// console.log(process.argv);

const amount = process.argv[2];
const firstCurrency = process.argv[3];
const secondCurrency = process.argv[4];

// console.log(firstCurrency, secondCurrency);



// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.

if (amount === undefined) {
    console.log("Missing argument: amount ");
    console.log("Usage: node currency-converter.js <amount> <convert currency from> <convert currency to>");
    console.log("Example: node currency-converter.js 10 USD CAD");
}
if (firstCurrency === undefined) {
    console.log("Missing argument: initial currency ");
    console.log("Usage: node currency-converter.js <amount> <convert currency from> <convert currency to>");
    console.log("Example: node currency-converter.js 10 USD CAD");
}
if (secondCurrency === undefined) {
    console.log("Missing argument: target currency ");
    console.log("Usage: node currency-converter.js <amount> <convert currency from> <convert currency to>");
    console.log("Example: node currency-converter.js 10 USD CAD");  
}


// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/




// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.

const URL = `https://api.ratesapi.io/api/latest?base=${firstCurrency}`;
axios
  .get(URL)
  .then((res) => {
    let currencies = Object.keys(res['data']['rates']);
    let first = currencies.includes(firstCurrency);
    let second = currencies.includes(secondCurrency);
    // First check if the currency is valid
    if (first != true) {
        console.log(`Sorry, but the currency "${firstCurrency}" doesn't exist. Please try using a valid currency.`)
    }
    if (second != true) {
    console.log(`Sorry, but the currency "${secondCurrency}" doesn't exist. Please try using a valid currency.`)
    }
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });



// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.

axios
  .get(URL)
  .then((res) => {
    let rates = res['data']['rates'];
    let targetValue = rates[secondCurrency];
    let convertRate = amount * targetValue;

// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.

    console.log(`Amount: ${amount}\nFrom: ${firstCurrency}\nTo: ${secondCurrency}\nResult: ${convertRate.toFixed(2)}`);
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });

