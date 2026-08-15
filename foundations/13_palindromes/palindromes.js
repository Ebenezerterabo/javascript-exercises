const palindromes = function (str) {

    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    // check string for valid characters
    newStr = str
        .toLowerCase()
        .split("")
        .filter((char) => alphanumerical.includes(char))
        .join("");
    reversedStr = newStr.split("").reverse().join("");

    if (newStr === reversedStr) {   
        return true;
    } else {
        return false;
    }
};



console.log(palindromes("r3ace3car"));
// console.log(add(1, 2));

// Do not edit below this line
module.exports = palindromes;
