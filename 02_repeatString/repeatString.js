const repeatString = function (text, n) {
  let string = "";

  if (n > 0) {
    for (i = 0; i < n; i++) {
      string += text;
    }
  } else if (n < 0) {
    string = "ERROR";
  } 

  return string;


};

// Do not edit below this line
module.exports = repeatString;
