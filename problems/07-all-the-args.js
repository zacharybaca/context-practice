function allTheArgs(func, ...args) {
  // Your code here
  return (...newArgs) => {
    return func(...args, ...newArgs);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
