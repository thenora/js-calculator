const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
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

const validInput = function() {

}


const calculate = function(input) {
  validInput()
  switch (input) {
    case 3:
      alert( 'Too small' );
      break;
    case 4:
      alert( 'Exactly!' );
      break;
    case 5:
      alert( 'Too large' );
      break;
    default:
      alert( "I don't know such values" );
  }
}



calculate(exampleAdditionInput) {

}



// There is a switch statement in JavaScript

