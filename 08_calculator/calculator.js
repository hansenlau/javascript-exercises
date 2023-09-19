const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(input) {
  const total = input.reduce((a,b)=>{
    return a+b;
    },0);
  return total;
  };

const multiply = function(input) {
  const total = input.reduce((a,b)=>{
return a*b;
  });
  return total;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};
/*
const factorial = function(n) {
	let f = [];
  if ( n == 0 || n == 1) return 1;
  else if (f[n] > 0) return f[n];
  console.log(f[n]);
  else return f[n] = factorial(n-1) * n;
  

};
*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
