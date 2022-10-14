const ftoc = function (n) {
  let value = (n - 32) * (5 / 9);

  return parseFloat(value.toFixed(1));
};

const ctof = function (n) {
  let value = n * (9 / 5) + 32;
  return parseFloat(value.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
