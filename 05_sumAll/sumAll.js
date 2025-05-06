const sumAll = function(start, finish) {
    let finalSum = 0;
    if (start < 0 || finish < 0 || !Number.isInteger(start) || !Number.isInteger(finish)) {
        return 'ERROR'
    } else if (start < finish) {
        for (let i = start; i <= finish; i++) {
            finalSum += i;
        }
        return finalSum;
    } else {
        for (let i = finish; i <= start; i++) {
            finalSum += i;
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
