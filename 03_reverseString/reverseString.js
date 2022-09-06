const reverseString = function(test_string) {
    let pole = test_string.split("")
    let otocenePole = pole.reverse()
    let poleFinani = otocenePole.join("")
    return poleFinani;
};

// Do not edit below this line
module.exports = reverseString;
