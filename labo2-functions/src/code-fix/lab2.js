// TODO: Fix the errors in the functions below!

const functions = {
  // This function takes an array of numbers and returns a new array with each number squared.
  squareNumbers(numbers) {
    // square numbers;
    const squared = numbers.map(val => val**2);
    return squared;
  },

  // This function takes an array of strings and returns a new array with only the strings that contain the letter 'a'.
  filterStrings(strings) {
    // filter
    const filteredStrings = strings.filter(val => val.includes('a'));
    return filteredStrings;
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array.
  sumReduceNumbers(numbers) {
    const sum = numbers.reduce((acc, val) => {return acc + val}, 0)
    return sum;
  },

  // removes last element of an array and returns it
  helper1(array) {
    return array.pop();
  },

  // add one element to an array
  helper2(arr, newOne) {
    arr.push(newOne)
    return arr;
  },

  // removes first element from an array and returns a new array
  helper3(arr) {
    return arr.shift();
  },

  // add elements to the top of an array
  helper4(arr, ...elements) {
    return [...elements, ...arr];
  },


  // takes an array, a starting index, the number of elements to remove, and any number of additional items to insert into the array at the specified starting index
  helper5(arr, start, deleteCount, ...items) {
    return arr.splice(start, deleteCount, ...items);
  },

  // takes an array and two indices (start and end) as parameters, and returns a new array containing the elements from the original array between the start and end indices (excluding the element at the end index)
  helper6(array, start, end) {
    return array.slice(start, end);
  },

  // concat two arrays
  helper7(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  // see unit tests for helper8 function
  helper8(arr, element) {
    return arr.indexOf(element);
  },

  // see unit tests for helper9 function
  helper9(array, value) {
    return array.includes(value);
  },

  // see unit tests for helper10 function
  helper10(array, callback) {
    return array.find(callback)
  },

  // see unit tests for helper11 function
  helper11(arr, predicate) {
    return arr.findIndex(predicate);
  },

  // takes an array arr and a callback function, and returns a boolean value indicating whether every element in the array satisfies the condition specified by the callback function
  helper12(arr, callback) {
    return arr.every(callback)
  },

  // takes an array arr and a callback function, returns true if at least one element in the array satisfies the condition specified in the callback function
  helper13(arr, funcCallback) {
    return arr.some(funcCallback)
  },

// see unit tests for helper14 function
  helper14(arr, separator) {
    return arr.join(separator);
  },

  // takes an array of numbers and returns the sum of all the numbers in the array using forEach.
  sumEachNumbers(numbers) {
    let sum = 0;
    numbers.forEach((val)=>{
      sum += val
    })
    return sum;
  },

  // takes an array of numbers, multiplies each number by 2, and returns the sum of even numbers.
  sumDoubledEvenNumbers(numbers) {
    // filter even number... num % 2 === 0
    // double numbers
    // sum
    console.log(numbers.filter((val)=>val % 2 === 0))
    return numbers.filter((val)=>val % 2 === 0).reduce((acc, val)=>acc + (val * 2), 0);
  },
};

module.exports = functions;
