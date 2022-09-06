const getTheTitles = (knihy) => {
    let poleNazvuKnih = []
    for (vec of knihy) {
    poleNazvuKnih.push(vec.title)
  }
  return(poleNazvuKnih)
}

// Do not edit below this line
module.exports = getTheTitles;
