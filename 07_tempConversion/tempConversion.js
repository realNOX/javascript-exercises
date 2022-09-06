const ctof = (celsius) => {
  const fahrenBase = 32;
  const oneFahren = 1.8;
  const fahrenResult = fahrenBase + oneFahren * celsius;
  return Math.round(fahrenResult * 10) / 10;
}

const ftoc = (fahrenheit) => {
  const celsiusBase = 0;
  const oneCelsius = 1;
  const celsiusResult = ((fahrenheit - 32) / 1.8);
  return Math.round(celsiusResult * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
