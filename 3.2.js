// Explicit return function
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
  }
  
  // Implicit return function
  const welcome = () => 'Welcome to Appleseeds Bootcamp!';
  
  // Explicit return function
  function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
  }
  
  // Implicit return function
  const power = (a) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
  }
  (function() {
    const squareRoot = a => Math.sqrt(a);
    const randomNumbers = (a, b) => Math.random() * (a - b) + b;
  })();
   