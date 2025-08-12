// Task 1 Solution
function celsiusToFahrenheit(num) {
  return num * 1.8 + 32;
}

console.log(celsiusToFahrenheit(2));

// Task 2 Solution

function countDuplicates(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

console.log(countDuplicates([30, 15, 8, 95, 7, 25, 15], 15));
