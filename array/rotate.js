let arr1 = [1, 2, 4, 8, 9];

function rotateByK(arr, k) {
  let n = arr.length;
  let result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = arr[i];
  }
  return result;
}

console.log(rotateByK(arr1, 2));
