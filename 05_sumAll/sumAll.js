const sumAll = function(...args) {
    let cislo1 = args[0];
    let cislo2 = args[1];
    let finalniCislo = 0;
  
    if (Number.isInteger(cislo1) && Number.isInteger(cislo2) && cislo1 > cislo2 && cislo1 > -1 && cislo2 > -1) {
      console.log("První číslo je větší")
      for (cislo2; cislo2 <= cislo1; cislo2++) {
        finalniCislo += cislo2;
      }
      return finalniCislo
    } else if (Number.isInteger(cislo1) && Number.isInteger(cislo2) && cislo1 < cislo2 && cislo1 > -1 && cislo2 > -1) {
      console.log("První číslo je menší")
      for (cislo1; cislo1 <= cislo2; cislo1++) {
        finalniCislo += cislo1;
      }
      return finalniCislo
    } else {
      return("ERROR")
    }
  }

// Do not edit below this line
module.exports = sumAll;

//Poznámky:
//...args se zde nehodí, jelikož jde jen o dvě čísla.
//použití min, max je výstižnější = let cislo1 a 2 vůbec být nemusí a rovnou se může pracovat s podmínkami