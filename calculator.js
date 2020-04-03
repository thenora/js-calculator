// invalid input

const exampleInvalidMath = {
  num1: 3,
  num2: 5,
  operation: "hotdog" // hotdog isn't a valid operation
}

const exampleInvalidMath2 = {
  num1: 3,
  num2: 5,
  operation: "" // no user input for operation
}

const exampleInvalidNum = {
  num1: "", // no user input for num1
  num2: 5,
  operation: "+" 
}

const exampleInvalidNum2 = {
  num1: 3, 
  num2: "x", // invalid input for num2
  operation: "+" 
}

const exampleDivideZero = {
  num1: 3, 
  num2: 0, // divide by zero
  operation: "/" 
}

// valid input

const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: "add"
}

const exampleAdditionInput2 = {
  num1: 6,
  num2: 5,
  operation: "+"
}

const exampleSubtractionInput = {
  num1: 5,
  num2: 3,
  operation: "subtract"
}

const exampleSubtractionInput2 = {
  num1: 5,
  num2: 2,
  operation: "-"
}

const exampleMultiplicationInput = {
  num1: 5,
  num2: 3,
  operation: "multiply"
}

const exampleMultiplicationInput2 = {
  num1: 15,
  num2: 3,
  operation: "*"
}

const exampleDivisionInput = {
  num1: 15,
  num2: 3,
  operation: "divide"
}

const exampleDivisionInput2 = {
  num1: 15,
  num2: 5,
  operation: "/"
}

/* 
The program should have support for these four operations: addition, subtraction, multiplication, and division.
The program should accept both the name and the symbol for each possible operation. The expected names and symbols for each operation are the following:
add and +
subtract and -
multiply and *
divide and /
*/

const maths = ["add", "+", "subtract", "-", "multiply", "*", "divide", "/"]

/* 
check if the input is invalid. What happens if the user input is nil (i.e., the user just pressed enter)? What happens if the user tries to add hotdog to elephant? What if the user input is hotdog for an operator?
if the input is invalid, output a message to the command line that informs the user that the input was invalid
*/

const validNum = function(num) {
  if (typeof num != 'number') {
    console.log('Oops. Please enter a number using numerals like 1, 9, or 22.');
    commandLineIntro();
  }
}

const noZero = function(num2) {
  if (num2 === 0) {
    console.log('Oops. You can\'t divide by zero.')
    commandLineIntro();
  };
}

// the calculations
const calcMath = {
  add(num1, num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`); 
  },
  subtract(num1, num2) {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  },
  multiply(num1, num2) {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
  },
  divide(num1, num2) {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
  }
};

const calculator = function(input) {

  const num1 = input.num1
  const num2 = input.num2

  validNum(num1);
  validNum(num2);
  noZero(num2)

  // chooses equation based on operation and handles invalid operation input
  switch (input.operation) {

    case "add":
    case "+":
      calcMath.add(num1, num2);
      break;
    case "subtract":
    case "-":
      calcMath.subtract(num1, num2);
      break;
    case "multiply":
    case "*":
      calcMath.multiply(num1, num2);
      break;
    case "divide":
    case "/":
      calcMath.divide(num1, num2);
      break;
    case "":
      console.log(
        `Oops! You didn't tell me what to do. Please choose add (+), subtract (-), multiply (*), or divide (/). Try again.`
      );
      commandLineIntro();
    default:
      console.log(
        `Sorry, I don\'t know what to do with "${input.operation}". Please tell me to add, subtract, multiply, or divide. Try again.`
      );
      commandLineIntro();
  };
}

// CLI intro
const commandLineIntro = function() {
  console.log("*********************************");
  console.log("Hello! I'm a calculator!");
  console.log("*********************************");
  console.log("I can take two numbers and perform basic math operations such as: add, subtract, multiply, and divide.");
  console.log("Normally I'd ask you for your input here, but instead I've pre-filled some numbers and operations. Check it out!");

testInputExamples();
}

// test data
const testInputExamples = function () {
  calculator(exampleAdditionInput);
  calculator(exampleAdditionInput2);
  calculator(exampleSubtractionInput);
  calculator(exampleSubtractionInput2);
  calculator(exampleMultiplicationInput);
  calculator(exampleMultiplicationInput2);
  calculator(exampleDivisionInput);
  calculator(exampleDivisionInput2);
}

// commandLineIntro() // runs full program with working input

// calculator(exampleInvalidMath) // runs an operator error input

// calculator(exampleInvalidNum2) // runs a num error input

calculator(exampleDivideZero) // example divide by zero