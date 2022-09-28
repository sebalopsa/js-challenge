function sortedSquaredArray(arr) {
  return arr.map((el) => el ** 2).sort((a, b) => a - b);
}

let arr = [-10, -5, 0, 5, 10];
console.log(sortedSquaredArray(arr));
