const repeatString = function(str, num) {
    
    const newStr = [];
    
    if (num < 0) return "ERROR";
    
    for (let i = 0; i < num; i++) {
        newStr.push(str);
    }
    
    return newStr.join("");
};

console.log(repeatString("hello", 4));

// Do not edit below this line
module.exports = repeatString;
