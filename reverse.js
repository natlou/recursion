import Stack from './stack.js'

function insertAtBottom(stack, item) { // Creating a helper function
  if (stack.isEmpty() == true) {
    stack.push(item);
  }

  else {
    var temp = stack.pop();
    insertAtBottom(stack, item);
    stack.push(temp);
  } 
}
 
function reverse(testVariable) {
  if (testVariable.isEmpty() == false) {
    var temp = testVariable.pop();
    reverse(testVariable);
    insertAtBottom(testVariable, temp);
  }
}