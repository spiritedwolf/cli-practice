# CLI Practice

## Dependencies
Please install the below dependencies first before running the 'currency-converter.js' file.

axios
`npm install axios`

## Introduction
This repository contains the starter files for the 'CLI Practice' exercise.

As part of today's exercise we're going to design, implement, and test a Node-based currency conversion tool. This tool will be implemented as a command line interface (CLI). Users of the CLI will supply an amount, an initial currency, and a target currency. The CLI will receive and validate this information. If the information is valid then the CLI will compute and return the result. If the information is invalid then the CLI will display a meaningful error message.

This exercise will build on the concepts and techniques that we've explored in this course, as well as some of the material that you have covered in the other WDDM courses.

## Learning Objectives
- To continue working with JavaScript.
- To learn more about Node, including packages and module resolution.
- To explore testing concepts and tools in more detail.
- To explore the concept of refactoring and iterative development.

## Prerequisites
To complete today's exercise you should have an understanding of the following:
- JavaScript fundamentals, including variables, functions, conditional statements, errors, and events.

You must also have Node installed on your local system. See the resources section below for download information.

## Goals
At a minimum, your submission should include the following features, functionality, and tests:
- The ability to convert between USD and CAD, as well as between CAD and USD. For example:
  - `node src/currency-converter.js 50 USD CAD`
  - `node src/currency-converter.js 50 CAD USD`
- Upon successful conversion, a message that displays the amount, initial currency, target currency, and the result.
- Basic handling of missing user input. For example, a generic message which informs the user that either the amount, initial currency, or target currency values are missing.
- Basic handling of invalid user input, specifically the currency information. For example, a generic message which informs the user that there is no conversion rate for the currencies supplied.
- Tests for at least one of the following:
  - User input validation.
  - Conversion rate extraction/validation.
  - Currency conversion.

## Stretch Goals
If you are interested in going above-and-beyond the minimum requirements of the assignment, try implementing one or more of the stretch goals outlined below:
- Specific validation for each of the user supplied inputs (amount, initial currency, target currency).
- Additional currencies and conversion rates.
- Dynamic conversion rates: instead of tracking the conversion rate for both USD-to-CAD _and_ CAD-to-USD, compute one value based on the other.
- Additional tests.

## Before You Begin
- Fork this repository to your personal GitHub account.

## Approach
This exercise includes both implementation (eg. writing code for the currency conversion program itself) as well as testing (eg. writing code to ensure that the program _works as expected_). There will also be opportunities to refactor the code and to implement additional features beyond the minimum requirements.

As usual, you are free to approach this exercise however you see fit. If you would like some additional help, feel free to use the following approach:

- Review the contents of the `src/currency-converter.js` file.
- Complete and commit each step in sequence. Make sure to test each step before moving on to the next.
- After completing your implementation, review the code and identify which portions can be moved into functions.
- Move the code that you have identified into functions. Update the program to use the new functions. Make sure to re-test the program.
- After confirming the program still works as expected, move the functions into a new file (eg. `src/functions.js`)`. Update the file so that the functions are exported. Update the original program (ie. `src/currency-converter.js`) to import the functions from the new file. Re-test the program.
- Now that the functions are _separate_ from the program itself they can be tested more easily. Import each function into the `test/index.test.js` file.
- Define and implement a series of tests to ensure that each function works as expected.

## Resources

### Node
- Download: https://nodejs.org/en/
- Accessing command line arguments: https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
- Modules, imports, and exports: https://nodejs.dev/learn/expose-functionality-from-a-nodejs-file-using-exports

### Testing
- Jest: https://jestjs.io/
- Using the `describe()` function: https://jestjs.io/docs/en/api#describename-fn
- Using the `test()` function: https://jestjs.io/docs/en/api#testname-fn-timeout

### Currency Conversion Rates
- XE: https://www.xe.com/
