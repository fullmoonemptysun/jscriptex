const palindromes = function (str) {

    const strProcessed = str.toLowerCase().match(/[a-z0-9]+/g).join("");
    const strReversed = strProcessed.split("").reverse().join("");

    return(strProcessed === strReversed);
};

// Do not edit below this line
module.exports = palindromes;
