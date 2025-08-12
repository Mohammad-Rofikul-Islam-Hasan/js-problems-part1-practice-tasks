// Task 1 Solution
function celsiusToFahrenheit(num) {
  return num * 1.8 + 32;
}

console.log(celsiusToFahrenheit(2));

// Task 2 Solution

function countDuplicates(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

console.log(countDuplicates([30, 15, 8, 95, 7, 25, 15], 15));

// Task 3 Solution

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].includes("a") ||
      str[i].includes("A") ||
      str[i].includes("e") ||
      str[i].includes("E") ||
      str[i].includes("i") ||
      str[i].includes("I") ||
      str[i].includes("o") ||
      str[i].includes("O") ||
      str[i].includes("u") ||
      str[i].includes("U")
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("I love JavaScript"));

// Task 4 Solution

function longestWord(str) {
  str = str.split(" ");
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i];
    }
  }
  return longest;
}

console.log(longestWord("I am learning Programming to become a programmer"));
