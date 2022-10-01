const removeFromArray = function(array, ...args) {
    let result = [];
    let removed = [...args];

    for (i=0;i<array.length;i++){
        if (removed.includes(array[i])){
            continue;
        }
        else {
            result.push(array[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
