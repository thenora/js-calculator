const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleSubtractionInput = {
  num1: 5,
  num2: 3,
  operation: 'subtract',
}

/* The program should have support for these four operations: addition, subtraction, multiplication, and division.
The program should accept both the name and the symbol for each possible operation. The expected names and symbols for each operation are the following:
add and +
subtract and -
multiply and *
divide and /
*/

const maths = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/']

/*
check if the input is invalid. What happens if the user input is nil (i.e., the user just pressed enter)? What happens if the user tries to add hotdog to elephant? What if the user input is hotdog for an operator?
if the input is invalid, output a message to the command line that informs the user that the input was invalid
*/

const validInput = function(input) {

  return calculator(input)
}

const calcMath = {
  add(num1, num2) {
    return console.log('${num1} + ${num2} = ${num1 + num2}');
  },

  subtract(num1, num2) {
    console.log('${num1} - ${num2} = ${num1 - num2}');
  },

  multiply(num1, num2) {
    console.log('${num1} * ${num2} = ${num1 * num2}')
  },

  divide(num1, num2) {
    console.log('${num1} / ${num2} = ${num1 / num2}')
  },
}


const calculator = function(input) {
  // validInput()
  const number1 = input.num1
  const number2 = input.num2

  switch (input.operation) {
    case 'add':
    case '+':
      calcMath.add(number1, number2);
      break;
    case 'subtract': 
    case '-':
      calcMath.subtract(num1, num2);
      break;
    case 'multiply':
    case '*':
      calcMath.multiply(num1, num2);
      break;
    case 'divide':
    case '/':
      calcMath.divide(num1, num2);
      break;
    case '':
      console.log('Please tell me to add (+), subtract (-), multiply (*), or divide (/).')
    default:
      console.log('Sorry, I don\'t know what to do with "${operation}". Please tell me to add, subtract, multiply, or divide.');
  };
}





calculator(exampleAdditionInput)

