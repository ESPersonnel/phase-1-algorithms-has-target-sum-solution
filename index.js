function hasTargetSum(array, target) {
  // Write your algorithm here
  for (var i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for(let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Big O: O(n^2)
*/

/* 
  Add your pseudocode here
  Psuedocode:
  1. Iterate through the array
  2. Create a complement variable
  3. Iterate through the array again
  4. If the complement is equal to the current element, return true
  5. Return false
*/

/*
  Add written explanation of your solution here
  Explanation:
  1. We iterate through the array and create a complement variable.
  2. We iterate through the array again and check if the complement is equal to the current element.
  3. If it is, return true.
  4. If it is not, return false.
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
