const x = 10;

function addNum(a, b){
    return a + b;
}


module.exports.x = x;
module.exports.addNum = addNum;

// Mordern way to write export. By wrapping all the exports in object
module.exports = {x, addNum};