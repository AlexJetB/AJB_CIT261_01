function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num2 < num1) {
    return num2;
  } else { //Numbers must be equal...
    return num1
  }
}

console.log(min(0,10));
console.log(min(0,-10));

function isEven(num) {
  var mod = num % 2;
  if (mod === 0) {
    return true;
  } else if (mod === 1){
    return false;
  } else {
    return isEven(num -= 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
// -1 Returns false because in JS 2%-1 == -1,
// and recursion will just indefinitely return
// a lower negative number, causing a stack error.
