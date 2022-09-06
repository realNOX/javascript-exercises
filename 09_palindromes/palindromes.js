const palindromes = (str) => {
    vstupniText = str
    let novePole = [];
    premenenyText = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    for (letter of premenenyText) {
      novePole.push(letter)
    }
    let otocenePole = novePole.reverse()
    let finalniText = otocenePole.join("")
    if (finalniText === premenenyText) {
      return(true)
    } else {
      return(false)
    }
  }

// Do not edit below this line
module.exports = palindromes;
