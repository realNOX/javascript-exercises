const fibonacci = (najdiXFibboCislo) => {
    const parametr = parseInt(najdiXFibboCislo)
    let posledniVysledek;
    let fibboCislo1 = 0;  
    let fibboCislo2 = 1;
    if (parametr === 1) {
        return(1)
        } else if(parametr > -1) {
      for (i = 1; i < parametr; i++) {
        posledniVysledek = fibboCislo1 + fibboCislo2;
        fibboCislo1 = fibboCislo2;
        fibboCislo2 = posledniVysledek;
        console.log("Krok", i, "Výsledek: ", posledniVysledek)
      }
      return posledniVysledek
    } else {
      return("OOPS")
    }
  }

// Do not edit below this line
module.exports = fibonacci;
