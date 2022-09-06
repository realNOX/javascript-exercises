const repeatString = function(string, numb) {
    if (numb < 0) {
        return("ERROR")
    } else {
        multiRepeat = string.repeat(numb);
        return multiRepeat;
    }
};

// Do not edit below this line
module.exports = repeatString;
