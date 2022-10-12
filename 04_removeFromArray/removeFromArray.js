const removeFromArray = function (a, d) {

    

  for (i = 0; i < a.length; i++) {
    if (a[i] === d) {
      delete a[i];
    } 
  }



  return a.filter(Number);
};

// Do not edit below this line
module.exports = removeFromArray;
