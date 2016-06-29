var operation = String(process.argv[2]);
var number1 = Number(process.argv[3]);
var number2 = Number(process.argv[4]);


 if(operation == "add") {
  console.log(number1 + number2);
}
 else if(operation == "subtract") {
  console.log(number1 - number2);
}
 else if(operation == "multiply") {
  console.log(number1 * number2);
}
 else if(operation == "divide" && number2 != 0) {
  console.log(number1 / number2);
}