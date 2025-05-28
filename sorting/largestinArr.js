let arr = [12, 14, 7, 55, 3, 9];

function largest(arr) {
  let n = arr.length;
  let max = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largest(arr));

function secLargest(arr) {
  let largest = -Infinity;
  let secLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secLargest) {
      secLargest = arr[i];
    }
  }
  if (secLargest === -Infinity) {
    return null;
  }
  return secLargest;
}
console.log( "Second largest element is : "+secLargest(arr))
