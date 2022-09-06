const findTheOldest = (listLidi) => {
    let nejstarsiVek = 0;
    for (list of listLidi) {
      if (list.yearOfDeath === undefined) {
        stariOsoby = 2022 - list.yearOfBirth
        if (stariOsoby > nejstarsiVek) {
          nejstarsiVek = stariOsoby
          nejstarsiJmeno = list.name
        }
      } else {
        stariOsoby = list.yearOfDeath - list.yearOfBirth;
        if(stariOsoby > nejstarsiVek) {
          nejstarsiVek = stariOsoby
          nejstarsiJmeno = list.name
        }
      }
  }
  return nejstarsiJmeno
  }

// Do not edit below this line
module.exports = findTheOldest;
