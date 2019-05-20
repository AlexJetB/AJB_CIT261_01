let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays);

let newArray = arrays.reduce(function(a, b) {
  return a.concat(b);
});

console.log(arrays);
console.log(newArray);
