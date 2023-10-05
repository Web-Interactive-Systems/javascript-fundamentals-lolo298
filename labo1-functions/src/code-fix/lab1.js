// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    // Todo use typeof and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Invalid types');
    return a + b;
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const double = (val) => val * 2;

    return array.map(double);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['merde'];
    grosMot.forEach((val) => {
      if (input.includes(val)) throw new Error('Pas de gros mots');
    });
  },

  nameOfWeekDay(index) {
    const jours = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    return jours.at(index);
  },
  /**
   *
   * @param {number[]} array
   * @returns
   */
  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    return array.sort((a, b) => (a < b ? -1 : 1));
  },

  createCounterFunction(input) {
    let state = input;
    return () => (state += 1);
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return `Hello ${name}. Are you well?`;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3
    callback(1, 2);
  },

  combineArrays(array1, array2) {
    return [...array1, ...array2];
  },

  promiseMeMoney() {
    return new Promise((r) => {
      r('send message');
    });
  },
};

module.exports = functions;
