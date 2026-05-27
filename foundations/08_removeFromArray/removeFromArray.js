const removeFromArray = function(arr, removeItem) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === removeItem) {
            arr.splice(i, 1);
            break;
        }
    }
    return arr;

};

console.log(removeFromArray([1,2,3,4], 1))

// Do not edit below this line
module.exports = removeFromArray;
