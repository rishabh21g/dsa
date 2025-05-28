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

// Basic idea: Har step mein ek element ko pick karte hain aur usse sorted portion mein sahi jagah insert kar dete hain.
// Algorithm steps:

// Start: Second element (index 1) se start karo kyunki first element already sorted hai
// Pick: Current element ko temporarily store karo
// Compare: Current element ko sorted portion ke elements se compare karo (right to left)
// Shift: Agar koi element current se bada hai, use right mein shift karo
// Insert: Sahi position mil jaaye to current element ko wahan insert karo
// Repeat: Next element ke liye same process repeat karo

// Time Complexity:

// Best case: O(n) - jab array already sorted hai
// Average case: O(n²)
// Worst case: O(n²) - jab array reverse sorted hai

// Space Complexity: O(1) - sirf constant extra space use karte hain