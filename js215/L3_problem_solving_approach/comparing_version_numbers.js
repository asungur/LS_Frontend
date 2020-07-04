// To look at the steps of this problem solving approach in depth, we will work through a problem and see how to apply each step in the process. The problem we will look at compares software version numbers.

// While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:

1
1.0
1.2
3.2.3
3.0.0
4.2.3.0
// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.
// Here is an example of version number ordering:

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37


function compareVersions(version1, version2) {
  // ...
}

// Understand the Problem and Requirements (1)
// Let's first break down and understand the problem, then clarify the requirements:

// Input and Output
// - Input: two version numbers in string representation, version1 and version2
// - Output: one of the numbers from 1, 0, and -1; or null for invalid inputs

// - if any inputs contain invalid characters, return null
//   - any characters other than digits and . are considered invalid
// - Compare the two input versions
//   - if version1 > version2, return 1
//   - if version1 < version2, return -1
//   - if version1 === version2, return 0

// Let's think about how we would compare the version numbers 2.3.4 and 2.3.5.

// Starting with the first number, we compare the number parts that make up each version.

// v
// 2.3.4
// 2.3.5
// ^
// If the first number is larger, then the first version number is larger. If the second number is larger, then the first version number is smaller. In this case, the numbers are the same. This means we'll need to move on to the next number part in each version and compare those values.

// The next number is also the same, so we'll again continue to the next one.

//   v
// 2.3.4
// 2.3.5
// | ^
// |
// same
// The third number within each version is different. Now we can make a determination using the rules from step #1. Since the number in the first version is smaller than the number in the second version, the first version number is considered smaller.

//     v
// 2.3.4
// 2.3.5
// | | ^
// | |
// | same
// same
// We can now conclude that the first version number is smaller than the second version number.

// Let's verbalize the above, and combine it with what we currently have:

// - if any inputs contain invalid characters, return null
//   - any characters other than digits and . are considered invalid
// - Compare the two input versions
//   - if version1 > version2, return 1
//   - if version1 < version2, return -1
//   - if version1 === version2, return 0
// - The rules to compare two version numbers
//   - start from the left most parts of the two version numbers
//   - if the number part of the first version number is larger, then the first version number is larger
//   - if the number part of the second version number is larger, then the first version number is smaller
//   - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
//     - do the same comparison and decide which version number is larger
//     - keep moving to the right until the result of the comparison is determined
//     - if we get to the last number part of the two version numbers and they're equal,
//       then the two version numbers are equal


// Q: How do I come up with good test cases?
// Here are some general guidelines for creating test cases:

// Input types
// Can the function take and handle different types of inputs, such as numbers, strings, booleans, and objects?
// Special values
// If the input is a number, does it work with zero, negative numbers, fractional numbers (e.g., 0.567), or special values (e.g., NaN, Infinity)?
// If the input is a string, array, or object, does it work with an empty string, array, or object (e.g., '', [], {})?
// If the input is an array, does it work with a "sparse array" (e.g, [1, , 2]) or an array with an object property (e.g., [1, 2, a: "A"])?
// Valid / Invalid inputs
// What should we consider as invalid inputs and what should we do with them? For example, if the input is supposed to be a "word", can we assume that it will be a string containing only letters and no other characters? Should we return a specific value—such as null or undefined—if the input isn't a valid word? Should we consider letter case? For example: 'a', 'dog', 'DOG', 'doG', ' dog', 'dog ', 'dog cat', 'dogCat', 'dog_cat', '@', 'dog4', '4dog', '42', 'dog\n'.
// What should we do when an input has been omitted? For example, should we issue an error message, return a specific value, or set that input to a default value and execute the function normally?
// Cover the requirements we captured in our requirement breakdown as completely as possible.
// Make sure to cover all the requirements, including both the generic cases and the edge cases.
// Look for the word, "if", in the requirement breakdown. Conditional requirements need test cases that cover both sides of the condition to have full coverage. For example, the following two test cases cover both sides of the given conditional requirement:
// // If one argument is a string and the other is a number,
// // convert the second argument to the type of the first argument,
// // then return both as a two-element array.
// foo('42', 43);                               // ["42", "43"]
// foo(42, '43');                               // [42, 43]
// Try to avoid testing more than one requirement per test case.
// Isolating each specific requirement will make it easier to validate and debug our solution later on.
// On the other hand, it is okay to test a single requirement using more than one test case—especially when testing more complex requirements, such as conditional requirements.

// Now let's get back to creating test cases for the "comparing version numbers" problem. We'll start off with some generic cases. Here are some possible comparisons that our program should be able to do:

// 1 is equal to 1
// 1.1 is greater than 1.0
// 2.3.4 is less than 2.3.5
// We also need to consider what edge cases our solution should handle. Here are some possible edge cases:

// 1.a is not a valid version          // we only want to deal with numbers and dots
// .1 and 1. are not valid versions    // versions must begin and end with a number
// 1..0 is not a valid version         // dots can only appear between two numbers
// 1.0 and 1.0.0 are equal to 1        // zeros can be inferred but are not always shown
// 1.0.0 is less than 1.1              // can handle version numbers with different lengths
// 1.0 is less than 1.0.5              // can handle version numbers with different lengths

// These test cases will carry us through the rest of the problem solving steps, serving as our guide and giving us concrete examples for verifying our work.

// We can now write out the formal test cases in a way that shows our inputs and expected outputs:

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

// Use Test Cases to Generalize Requirement Breakdown
// The test cases give us a more complete view of the expected behaviors. Since our current focus is too narrow, we must generalize our requirement breakdown to include version numbers with different lengths.

// Our key insight comes from the fact that trailing parts of zeros don't change a version number's value. Therefore, we can use zeros to "pad" a version number when we reach its end. For example, after we compare the 0 parts in 1.0 and 1.0.5, we can pad a zero to 1.0, changing it to 1.0.0, and compare this with 1.0.5—we can then conclude that the first version number is smaller.

// Taking this into consideration, we can update our requirements as shown below:

// - if any inputs contain invalid characters, return null
//   - any characters other than digits and . are considered invalid
// - Compare the two input versions
//   - if version1 > version2, return 1
//   - if version1 < version2, return -1
//   - if version1 === version2, return 0
// - The rules to compare two version numbers
//   - start from the left most parts of the two version numbers
//   - if the number part of the first version number is larger, then the first version number is larger
//   - if the number part of the second version number is larger, then the first version number is smaller
//   - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
//     - do the same comparison and decide which version number is larger
//     - keep moving to the right until the result of the comparison is determined
//       - if we reach the end of only one number, pad that number with a 0 part
//     - if we get to the last number part of the two version numbers and they're equal,
//       then the two version numbers are equal

// With all that we've done so far, writing our code is now extremely easy:

function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);

  for (let i = 0; i < aParts.length; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

// Let's run the test cases through our solution:

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
// All test cases should pass at this point, except for the last one. We must revisit the code to determine why our code isn't doing what we expect. We should also think about how these inputs differ from the inputs in the passing test cases.

function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}