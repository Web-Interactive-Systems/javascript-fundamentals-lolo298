// TODO: Fix the errors in the functions below!

const functions = {
  // Computes the total order of a command
  // Rule: if total order is > 1000 the shipping is free
  orderTotal(order) {
    // const totalNormalItems = order.items...;
    // const shippingItem = order.items...;
    // const shipping = ...;
    return order.items.reduce((acc, item)=>{
      if(item.shipping) {
        return acc > 1000 ? acc : acc + item.price;
      }
      return acc + (item.price * item.quantity)
    }, 0)
  },

  addPositiveNumbers(array) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    let sum = 0;

    array.forEach((val)=>{
      if(val > 0) sum += parseInt(val)
    })

    return sum;
  },

  // Takes a string, find the first consecutively repeating character in it and return the last index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    string = string.toUpperCase()
    let last = '';
    let res;
    for (let i = 0; i < string.length - 1; i++){
      let val = string[i]
      if(val !== ' ' && val === last){
        res = i ;
        break;
      }
      last = val
    }
    return res ?? -1;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's 
  // in this array. If there is any value other than 1 or 0 in the array, 
  // this is an error, return -1. The 1's and 0's may be either string or 
  // integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = 0;
    let currentCount = 0;
    for(let i = 0; i <= array.length - 1; i++) {
      const val = parseInt(array[i]);
      const next = parseInt(array[i+1])
      if(val !== 0 && val !== 1) return -1;
      if(val === next){
        currentCount += 1
      } else {
        if(currentCount > maxCount) maxCount = currentCount + 1
        currentCount = 0
      };
    }
    return Math.max(currentCount, maxCount);
  },
};

module.exports = functions;
