function repeatString(string,num) {
  let result ="";
  if (num<0) result = "ERROR";
  else if (num>=0) for (let i=0; i<num; i++) {
      result += string;};
  return result;
  };

  repeatString("hey",3);


module.exports = repeatString;
