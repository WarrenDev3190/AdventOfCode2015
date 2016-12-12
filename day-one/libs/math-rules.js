function sum (...nums) {
  return nums.reduce((acc, n) => n + acc , 0);
}

module.exports = {
  sum,
};
