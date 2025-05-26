let num = [5, 4, 88, 14, 74, 15];

// adjacent swaps check i and i+1 if they i+1 < i then swap it this will create at the last max in first n- 1 iterations

function bubbleSort(num) {
  let n = num.length;
  for (let i = 0; i < n - 1; i++) {
    console.log("OUTER LOOP" + " " + i);
    let swapped = false;
    for (let j = i + 1; j < n - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        [num[j], num[j + 1]] = [num[j + 1], num[j]];
        swapped = true;
      }
      console.log("INNER LOOP" + " " + j);
    }

    if (!swapped) break;
  }
  return num;
}

const result = bubbleSort(num);
console.log(result);
