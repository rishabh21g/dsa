let arr = [12, 14, 7, 28, 3];

//select the minimum and swap with the first index element
//again check the second smallest swap with that at index 2 and repeat it
//it will create left side sorted array and the right side un sorted array
// TC O(n2) SC O(1)
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return arr;
}

const result = selectionSort(arr);

console.log(result);


// for descending order

function selectionSortDesc(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let maxIdx = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (arr[j] > arr[maxIdx]) {
        maxIdx = j;
      }
    }
    if (maxIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[maxIdx];
      arr[maxIdx] = temp;
    }
  }
  return arr;
}

const sortDesc = selectionSortDesc(arr)
console.log(sortDesc)