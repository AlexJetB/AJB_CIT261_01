function range(start, end, step) {
  var rangeArray = new Array();
  if (step === undefined) {
    step = 1;
  }

  for (var i = start; i <= end; i += step) {
    rangeArray.push(i);
  }
  return rangeArray;
}

function sum(arrayOfNum) {
  let sumOfNum = 0;
  for (let num of arrayOfNum) {
    sumOfNum += num;
  }
  return sumOfNum;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(sum(range(1, 10)));
