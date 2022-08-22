function isPalindrome(testVariable) {
    // Write your code here
  
    if (testVariable.length === 0) 
      return true; 
  
    else if (testVariable[0] !== testVariable[testVariable.length - 1])
      return false; 
  
    else if (testVariable.length == 1 || testVariable.length == 2) 
      return true; 
    
    else 
      return isPalindrome(testVariable.slice(1, testVariable.length - 1));
    
    return null;
}