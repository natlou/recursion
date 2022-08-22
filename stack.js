class Stack {
	
	// constrictor
	constructor() {
		this.myStack = [];
	}
	
  // push an element in stack
	push(newData) {
    this.myStack.unshift(newData)
	}

  // check whether stack is empty or not
  isEmpty() {
    if(this.myStack.length == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  // pop element from the top of the stack
  pop() {
    if (this.isEmpty() == false)
    {
      var temp = this.myStack[0];
      this.myStack = this.myStack.slice(1);
      return temp;
    }
    else 
    {
      throw new Error("End of Stack reached");
    }
  }
	
  // function for printing stack
	getStack() {
    return this.myStack;
	}
}

module.exports =  Stack;