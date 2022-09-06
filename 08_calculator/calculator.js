const add = (cislo1, cislo2) => vysledek = cislo1 + cislo2;

const subtract = (cislo1, cislo2) => vysledek = cislo1 - cislo2;

const sum = (pole) => pole.reduce((a, b) => a + b, 0)

const multiply = (pole) => {
  let vysledekMultiply = 0;
  if(pole.length > 0) {
    vysledekMultiply = 1;
  for (cisla of pole) {
    vysledekMultiply = vysledekMultiply * cisla
    }
  } else {
    return 0;
  }
  return vysledekMultiply;
}

const power = (cislo, powerCislo) => {
  let vysledekPower = cislo
	if (powerCislo > 0) {
    for (let i = 1; i < powerCislo; i++) {
      vysledekPower = vysledekPower * cislo
    }
  } else {
    return cislo
  }
  return vysledekPower
};

const factorial = function(cisloFaktorial) {
	if (cisloFaktorial > 0) {
    vysledekFaktorial = 1
    for (let i = 0; cisloFaktorial > i; cisloFaktorial--) {
      console.log(cisloFaktorial)
      vysledekFaktorial = vysledekFaktorial * cisloFaktorial
    }
  } else {
    return 1;
  }
  return vysledekFaktorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
