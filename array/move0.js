let arr = [0, 1, 2, 0, 0, 10, 11, 0];

const moveZeroes = (arr) => {
  let n = arr.length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  for (let i = temp.length; i < n; i++) {
    arr[i] = 0;
  }
  return arr
};
console.log(moveZeroes(arr));
