let arr1 = [1, 2, 4, 8, 9];
const targetFound = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.info(`Target found at index ${i}`);
      return true;
    }
  }
  return false;
};
console.log(targetFound(arr1, 9));
