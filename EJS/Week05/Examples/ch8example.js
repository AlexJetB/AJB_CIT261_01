class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      var result = primitiveMultiply(a, b)
      console.log("Success!");
      break;
    } catch (error) {
      console.log(error + ", failure!")
    }
  }
  return result;
}

console.log(reliableMultiply(8, 8));
// → 64
