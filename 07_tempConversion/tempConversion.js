const convertToCelsius = function(f) {

  c = (f - 32)* 5 / 9 ;
  cRounded = Math.round(c *10)/10
  return cRounded;
  };
  
  const convertToFahrenheit = function(c) {
  
    fa = c * 9  / 5 +32 ;
  faRounded = Math.round(fa*10)/10;
    return faRounded;
  };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
