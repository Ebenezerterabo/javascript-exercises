const fibonacci = function(position) {

    if (position < 0) return "OOPS";
    if (position == 0) return 0;

    let array = [1, 1];
    for (let i = 2; i <= position; i++) {
        // array[i] = array[i - 1] + array[i - 2];
        array.push(array[i - 1] + array[i - 2]);        
    }
    return array[position - 1];
};

console.log(fibonacci(-10));
// Do not edit below this line
module.exports = fibonacci;
