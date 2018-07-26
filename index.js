function add(num1, num2){
  return(num1 + num2);
}

function subtract(num1, num2){
  return(num1 - num2);
}

function multiply(num1, num2){
  return(num1 * num2);
}

function divide(num1, num2){
  return(num1 / num2);
}

function inc(num1){
  return(num1 += 1);
}

function dec(num1){
  return(num1 -+ 1);
}

function makeInt(n){
  var a = parseInt(n);
  return(a);
}

function preserveDecimal(string){
  var a = parseFloat(string);
  return(a);
}

parseInt('nonsense!', 10);
