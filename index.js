/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */


function calculator() { //This line defines a JavaScript function named calculator with no parameters.
    let command = process.argv[2]; // This line declares a variable command and assigns it the value of the third command-line argument, which is expected to be the operation (e.g., "plus" or "minus").
    let numbers = process.argv.slice(3); //This line creates an array numbers by slicing the process.argv array starting from the fourth element. It collects all the numbers provided as command-line arguments.
    let result = 0; //This line initializes a variable result to store the final calculation result, setting it to 0 initially(the base start).

    if (!command) { //This line starts an if statement to check if command is falsy (e.g., empty or undefined).
        return "No operation provided..."; //If command is falsy, this line returns the string "No operation provided..." as an error message.
    } else if (!numbers.length) { //This line checks if the numbers array is empty (has a length of 0).
        return "No numbers provided..."; //If numbers is empty, this line returns the string "No numbers provided..." as an error message.
    }

    if (command === "plus") { //This line starts an if block to handle addition if command is "plus".
        for (let i = 0; i < numbers.length; i++) { //This line initiates a for loop to iterate over the numbers array.
            result += Number(numbers[i]); //This line inside the loop adds the numeric value of each element in the numbers array to the result variable.
        }
        return result; //After the loop, this line returns the final sum stored in the result variable.
    } else if (command === "minus") { //This line starts an else if block to handle subtraction if command is "minus".
        result = Number(numbers[0]); //This line initializes the result variable with the first number in the numbers array.
        for (let i = 1; i < numbers.length; i++) { //This line is the start of a for loop thats intentions are to loop over the remaining numbers in the numbers array (excluding the first one).
            result -= Number(numbers[i]); //This line, inside of the loop, is to  subtract the numeric value of each element from the result variable.
        }
        return result; // After the looping, this line is to return the final result of the subtraction.
    } else { //This else block handles the case when the command is neither "plus" nor "minus."
        return `Invalid operation: ${command}`; //In this case, this line is to return an error message indicating that the operation is invalid, including the invalid operation specified in the message.
    }
}

// Don't change anything below this line.
module.exports = calculator;
