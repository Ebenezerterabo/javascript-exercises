const convertToCelsius = function(fahrenheit) {
  const fraction = 5 / 9;

  const result = (fahrenheit - 32) * fraction;

  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  const revFraction = 9 / 5;

  const result = (celsius * revFraction) + 32;

  return Math.round(result * 10) / 10;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
