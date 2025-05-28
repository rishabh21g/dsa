let arr = [12, 14, 7, 55, 3, 9];
let arr1 = [1, 2, 4, 8, 9];

function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverse(arr1))
