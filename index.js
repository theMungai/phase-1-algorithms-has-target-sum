function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) {
      return true;
    }

    seenNumbers.add(number);
  }

  return false;
}

/* 
  Time Complexity: O(n)
  - We are iterating through the array once, where 'n' is the length of the array.
  - In each iteration, we check for the complement in the set, which takes constant time (O(1) on average).
  - Adding elements to the set also takes O(1) time on average.
  - So, the overall time complexity is O(n).
*/

/* 
  Pseudocode:
  1. Initialize an empty set `seenNumbers` to store the numbers we've already encountered.
  2. Loop through each number in the `array`:
     a. Calculate the complement as `target - number`.
     b. Check if the complement exists in the `seenNumbers` set:
        - If it does, return `true` because we found a pair that adds up to the target.
     c. If not, add the current `number` to the `seenNumbers` set.
  3. If no pair is found by the end of the loop, return `false`.
*/

/* 
  Explanation:
  - The function aims to check if any two numbers in the given `array` sum up to the `target`.
  - It uses a `Set` to store the numbers we've already processed as we iterate through the array.
  - For each number, we calculate its complement (i.e., `target - number`).
  - If the complement is already in the `Set`, it means we found two numbers that sum to the target, and we return `true`.
  - If the complement is not in the set, we add the current number to the set and continue the iteration.
  - If the loop completes without finding a pair, we return `false`.

  Example:
  For the array `[3, 8, 12, 4, 11, 7]` and target `10`:
  - We first check if `7` (complement of `3`) is in the set. It's not, so we add `3` to the set.
  - We then check if `2` (complement of `8`) is in the set. It's not, so we add `8` to the set.
  - We check if `-2` (complement of `12`) is in the set. It's not, so we add `12` to the set.
  - We check if `6` (complement of `4`) is in the set. It's not, so we add `4` to the set.
  - We check if `-1` (complement of `11`) is in the set. It's not, so we add `11` to the set.
  - Finally, we check if `3` (complement of `7`) is in the set. It is! So we return `true`.

*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
