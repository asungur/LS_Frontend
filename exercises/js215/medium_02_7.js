// https://en.wikipedia.org/wiki/Bubble_sort


const array1 = [5, 3];
console.log(bubbleSort(array1));
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
console.log(bubbleSort(array2));
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array3));
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// const array4 = [];
// console.log(bubbleSort(array4));
// console.log(array4);    // []

// const array5 = ['a'];
// console.log(bubbleSort(array5));
// console.log(array5);    // ['a']

// const array6 = 'a[]';
// console.log(bubbleSort(array6));
// console.log(array6);    // null



// input: array
// output: the same array sorted

// input must be an array
// input must have at least two values, else return the input array.
// comparison??

// iteration:
// start with index 0 finish with index arr.length - 2
// compare with the next value
// if the initial value is larger, replace

function bubbleSort(array) {
  if (!Array.isArray(array)) {
    return null;
  } else if (array.length < 2) {
    return array;
  }

  for (let i = 0; i < array.length - 1; i += 1) {
    let tempArr = [array[i], array[i + 1]].sort((a, b) => a - b);
    array[i] = tempArr[0];
    array[i + 1] = tempArr[1];
  }

  return array;
}


// LS SOLUTION

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] <= array[i]) {
        continue;
      }

      swap(array, i - 1, i);
      swapped = true;
    }

    if (!swapped) {
      break;
    }
  }
}

function swap(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}