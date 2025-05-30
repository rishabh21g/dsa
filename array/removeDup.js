let arr = [12, 14, 7, 55, 3, 9, 9, 55, 1, 1, 1, 14];
let arr1 = [1, 2, 4, 8, 9];

let uniqueArr = [...new Set(arr)]; // shortcut
// console.log(uniqueArr)

// Brute force
function delDup(arr) {
  let uniqueArr = new Set();
  for (let i = 0; i < arr.length; i++) {
    uniqueArr.add(arr[i]);
  }
  return [...uniqueArr];
}

console.log(delDup(arr));

// by hashing
function remDupByHash(arr) {
  let uniqueArr = [];
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      uniqueArr.push(arr[i]);
      map[arr[i]] = true;
    }
  }
  return uniqueArr;
}

// console.log(remDupByHash(arr));
