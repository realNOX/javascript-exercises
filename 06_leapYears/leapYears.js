const leapYears = (year) => {
  //return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
    if (year % 100 === 0 && year % 400 === 0) return true;
    if (year % 100 != 0 && year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }

// Do not edit below this line
module.exports = leapYears;
