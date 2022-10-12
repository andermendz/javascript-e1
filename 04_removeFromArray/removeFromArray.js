const removeFromArray = function (a, ...n) {
  // im fucking motivated RN

  n.forEach((d) => {
    for (i = 0; i < a.length; i++) {
      if (a[i] === d) {
        delete a[i];
      }
    }
  });

  return a.filter(String);
};

// Do not edit below this line
module.exports = removeFromArray;
