let arr = [12, 14, 7, 55, 3, 9];
let arr1 = [1, 2, 4, 8, 9];

function sortedCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(sortedCheck(arr1));
