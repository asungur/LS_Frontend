// In this exercise, you will implement your own version of the Array.prototype.reverse method. Your implementation should differ from the built-in method in the following two ways:

// It should accept either a string or an array as an argument.
// It should return a new string or array.

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  var reversed = [];
  var length = inputForReversal.length;
  var i;

  for (i = 0; i < length; i += 1) {
    reversed[length - 1 - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  var stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}