let arr = [12, 14, 7, 55, 3, 9];

function insertion(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

const sorted = insertion(arr);
console.log(sorted);
