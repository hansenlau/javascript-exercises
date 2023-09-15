let sum = 0;

const sumAll = function(firstNum, lastNum) {
  if (typeof firstNum !== "number" || typeof lastNum !== "number") return "ERROR";
  else if (firstNum < 0 || lastNum <0) return "ERROR";
  else if (firstNum > lastNum) {
     n = firstNum - lastNum +1;
  } else n = lastNum - firstNum + 1;

  return (n/2)*(firstNum+lastNum);

};

// Do not edit below this line
module.exports = sumAll;
