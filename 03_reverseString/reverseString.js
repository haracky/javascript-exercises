const reverseString = function(input) {
    let result = '';
    for (i=0;i<input.length;i++){
        result += input[input.length-i-1];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
